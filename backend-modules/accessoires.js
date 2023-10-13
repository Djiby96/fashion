/*
    1. Afficher la page accessoires
*/

var con = require("./MySQL"),
    pagination = require("./pagination"),
    fs = require("fs");

var Accessory = {
    // 1
    page : (req, res) =>{
        var R = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
        `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
        `WHERE category='accessories' `

        var RS = `SELECT COUNT(*) FROM product INNER JOIN category USING(number) WHERE category='accessories' `

        // var data = fs.readFileSync("./backend-modules/ac.js", "utf-8") || '[]';
        
        // var p = JSON.parse(data);

        // get query
        var page = parseInt(req.query.page) || 1,
            gender = req.query.gender,
            type = req.query.type,
            price_order = req.query.price;
        
        if(gender){
            if(gender == 'men' || gender == 'women'){
                R = R + `AND (gender='${gender}' || gender='men-women') `
                RS = RS + `AND (gender='${gender}' || gender='men-women') `
            }else{
                R = R + `AND gender='${gender}' `
                RS = RS + `AND gender='${gender}' `
            }

            // if(gender =="enfant-bebe" || gender =="men-women"){
            //     p.forEach((product, index) =>{
            //         if(product.gender != gender){
            //             delete p[index];
            //         }
            //     })
            // }else{
            //     p.forEach((product, index) =>{
            //         if(product.gender != gender && product.gender !='men-women'){
            //             delete p[index];
            //         }
            //     })
            // }
        }
        
        if(type){
            R = R + `AND type='${type}' `
            RS = RS + `AND type='${type}' `

            // p.forEach((product, index) =>{
            //     if(product.type != type){
            //         delete p[index];
            //     }
            // })
        }
        if(price_order){
            R = R + `AND price !=0 `
            var order_price = `price ${price_order}, `
        }else{
            var order_price = ``;
        }

        // var N = 100,
        // URL = req._parsedOriginalUrl,
        // pagination_link = pagination.createPaginationLink(N, page, URL, 100);

        // res.render("accessoires.html", {
        //     products: p,
        //     pagination_link: pagination_link
        // }) 

        R = R + `ORDER BY ` + order_price + `date DESC LIMIT ${(page - 1)*100}, 100`
        
        var RF = R + ";" + RS;
        con.query(RF, (err, rs) =>{
            if(err){
                res.redirect("/");
            }else{
                var products = rs[0];

                // var d = JSON.stringify(products);
                // fs.writeFileSync("./backend-modules/ac.js", d)

                // pagination
                var N = rs[1][0]['COUNT(*)'],
                        URL = req._parsedOriginalUrl,
                        pagination_link = pagination.createPaginationLink(N, page, URL, 100);

                res.render("accessoires.html", {
                    products: products,
                    pagination_link: pagination_link
                })        
            }
        })
    }
}

module.exports = Accessory;