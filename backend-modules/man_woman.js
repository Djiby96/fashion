/*
    1. Afficher la page de produits :men, women et enfant-bebe
*/

var con = require("./MySQL"),
    pagination = require("./pagination"),
    fs = require("fs");

var ManWoman = {
    // 1
    page : (req, res) =>{
        var gender = req.params.gender,
            category = req.params.category;

        if((gender != "men" && gender != "women") || (category != "clothing" && category != "shoes")){
            res.redirect("/");
        }else{
            var R = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
            `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
            `WHERE (gender='${gender}' || gender='men-women') AND category='${category}' `

            var RS = `SELECT COUNT(*) FROM product INNER JOIN category USING(number) WHERE (gender='${gender}' || gender='men-women') AND category='${category}' `

    
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
                price_order = req.query.price;

            if(price_order){
                R = R + `AND price !=0 `;
                var order_price = `price ${price_order}, `
            }else{
                var order_price = ``;
            }    

            if(type){
                R = R + `AND MATCH(type) AGAINST('${type}') `
                RS = RS + `AND MATCH(type) AGAINST('${type}') `

                // products.forEach((product, index) =>{
                //     if(product.type != type){
                //         delete products[index];
                //     }
                // })
            }

            // pagination
            // var N = 50,
            //     URL = req._parsedOriginalUrl,
            //     pagination_link = pagination.createPaginationLink(N, page, URL, 50);
 
            // res.render("man_woman.html", {
            //     gender: gender,
            //     category: category,
            //     products: products,
            //     pagination_link: pagination_link
            // })

            R = R + `ORDER BY ` + order_price + `date DESC LIMIT ${(page - 1)*100}, 100`

            var RF = R + ";" + RS;
            con.query(RF, (err, rs) =>{
                if(err){
                    console.log(err);
                    res.redirect("/");
                }else{
                    var products = rs[0];

                    // var d = JSON.stringify(products);
                    // fs.writeFileSync("./backend-modules/fc.js", d)
                    
                    // pagination
                    var N = rs[1][0]['COUNT(*)'],
                        URL = req._parsedOriginalUrl,
                        pagination_link = pagination.createPaginationLink(N, page, URL, 100);
                
                    //render
                    res.render("man_woman.html", {
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