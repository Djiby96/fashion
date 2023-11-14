/*
    1. Afficher la page de produits :men, women et enfant-bebe
*/

var con = require("./MySQL"),
    pagination = require("./pagination"),
    fs = require("fs"),
    describePage = require("./describePage");

var ManWoman = {
    // 1
    page : (req, res) =>{
        var gender = req.params.gender,
            category = req.params.category;

        if((gender != "men" && gender != "women" && gender != "boy" && gender != "girl" && gender != "baby") || (category != "clothing" && category != "shoes" && category != "accessories")){
            res.redirect("/");
        }else{
            var R = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
            `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
            `WHERE category='${category}' `

            var RS = `SELECT COUNT(*) FROM product INNER JOIN category USING(number) WHERE category='${category}' `

            if(gender == "men" || gender == "women"){
                R = R + `AND (gender='${gender}' || gender='men-women') `
                RS = RS + `AND (gender='${gender}' || gender='men-women') `
            }else if(gender == "boy" || gender == "girl"){
                R = R + `AND (gender='${gender}' || gender='boy-girl') `
                RS = RS + `AND (gender='${gender}' || gender='boy-girl') `
            }else{
                R = R + `AND gender='${gender}' `
                RS = RS + `AND gender='${gender}' `
            }

    
            // if(gender == "men" && category =="clothing"){
            //     var data = fs.readFileSync("./backend-modules/hv.js", "utf-8")
            // }else if(gender == "women" && category =="clothing"){
            //     var data = fs.readFileSync("./backend-modules/fv.js", "utf-8")
            // }else if(gender == "women" && category =="shoes"){
            //     var data = fs.readFileSync("./backend-modules/fc.js", "utf-8")
            // }else{
            //     var data = fs.readFileSync("./backend-modules/hc.js", "utf-8") || '[]'
            // }

            // var products = JSON.parse(data);

            // get query
            var page = parseInt(req.query.page) || 1,
                type = req.query.type,
                price_order = req.query.price,
                sex = req.query.sex;
   
            if(price_order){
                R = R + `AND price !=0 `;
                var order_price = `price ${price_order}, `
            }else{
                var order_price = ``;
            }    

            if(type){
                R = R + `AND MATCH(type) AGAINST('${type}') `
                RS = RS + `AND MATCH(type) AGAINST('${type}') `
            }

            if(sex){
                R = R + `AND (sub_category='${sex}' || sub_category='boy-girl') `
                RS = RS + `AND (sub_category='${sex}' || sub_category='boy-girl') `  
            }


            R = R + `ORDER BY ` + order_price + `date DESC LIMIT ${(page - 1)*50}, 50`

            var RF = R + ";" + RS;
            con.query(RF, (err, rs) =>{
                if(err){
                    console.log(err);
                    res.redirect("/");
                }else{
                    var products = rs[0];
                    
                    // pagination
                    var N = rs[1][0]['COUNT(*)'],
                        URL = req._parsedOriginalUrl,
                        pagination_link = pagination.createPaginationLink(N, page, URL, 50);
                
                    //title and description for page adapter
                    var title_page = "Clothing, shoes and accessories | Men, Women, Baby, Boy, Girl", 
                        describe_page = "Discover a world of fashion at Our store. We offer a carefully curated selection of stylish clothing and footwear for both men and women. From casual to formal, find your perfect look with us."; 
                       
                    var titleDescripPage = describePage.get(req._parsedOriginalUrl.path);
                    if(titleDescripPage){
                        title_page = describePage.get(req._parsedOriginalUrl.path).title;
                        describe_page = describePage.get(req._parsedOriginalUrl.path).description || describe_page;
                    }

                    //render
                    res.render("products.html", {
                        title_page: title_page,
                        describe_page: describe_page,
                        gender: gender,
                        category: category,
                        products: products,
                        pagination_link: pagination_link
                    })
                }
            })
        } 
    }
}

module.exports = ManWoman;