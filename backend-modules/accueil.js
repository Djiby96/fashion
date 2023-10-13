/*
    1. Afficher la page d'accueil
*/

var con = require("./MySQL"),
    fs = require("fs");

var Accueil = {
    // 1
    page_accueil : (req, res) =>{
        var R_HOMME = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
        `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
        `WHERE gender='men' AND category='clothing' ORDER BY date DESC LIMIT 0,10`

        var R_FEMME = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
        `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
        `WHERE gender='women' AND category='clothing' ORDER BY date DESC LIMIT 0,10`

        var RF = R_HOMME + ";" + R_FEMME;
        con.query(RF, (err, rs) =>{
            if(err){
                var products_h = [],
                    products_f = [];
            }else{
                var products_h = rs[0],
                    products_f = rs[1]; 
            }

            res.render("accueil.html", {
                products_h: products_h,
                products_f: products_f
            })
        })

        // var data_h = fs.readFileSync("./backend-modules/products_h.js", "utf-8")
        // var data_f = fs.readFileSync("./backend-modules/products_f.js", "utf-8")

        // var products_h = JSON.parse(data_h) || [];
        // var products_f = JSON.parse(data_f) || [];

        // res.render("accueil.html", {
        //     products_h: products_h,
        //     products_f: products_f
        // });
        
    }
}

module.exports = Accueil;