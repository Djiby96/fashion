/*
    1. Afficher la page pour les enfants et bebe
*/
const { log } = require("console");
var con = require("./MySQL"),
    pagination = require("./pagination"),
    fs = require("fs");

var ChildBaby = {
    // 1
    page : (req, res) =>{
        var category = req.params.category;
        if(category != "clothing" && category != "shoes" && category != "accessories" ){
            res.redirect("/")
        }else{
            var R = `SELECT product.*, category, sub_category, url_img, number_img, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+
            `REPLACE(title, ' ', '-') AS 'title_concat' FROM product INNER JOIN category USING(number) INNER JOIN images USING(number) ` +
            `WHERE gender='baby' AND category='${category}' `
    
            var RS = `SELECT COUNT(*) FROM product INNER JOIN category USING(number) WHERE gender='baby' AND category='${category}' `
    
            
            // var data = fs.readFileSync("./backend-modules/eb.js", "utf-8") || '[]';
            
            // var p = JSON.parse(data);
    
            // get query
            var page = parseInt(req.query.page) || 1,
                sex = req.query.sex,
                price_order = req.query.price;
    
            // if(category){
            //     R = R + `AND category='${category}' `
            //     RS = RS + `AND category='${category}' `
    
            //     // p.forEach((product, index) =>{
            //     //     if(product.categorie != categorie){
            //     //         delete p[index];
            //     //     }
            //     // })
            // }    
    
            if(sex){
                R = R + `AND (sub_category='${sex}' || sub_category='boy-girl') `
                RS = RS + `AND (sub_category='${sex}' || sub_category='boy-girl') `  
                
                // p.forEach((product, index) =>{
                //     if(product.sous_categorie != sexe){
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
    
            // pagination
            // var N = 100,
            // URL = req._parsedOriginalUrl,
            // pagination_link = pagination.createPaginationLink(N, page, URL, 100);
            // res.render("enfant_bebe.html", {
            //     products: p,
            //     pagination_link: pagination_link
            // })
    
    
            R = R + `ORDER BY ` + order_price + `date DESC LIMIT ${(page - 1)*100}, 100`
            
            var RF = R + ";" + RS;
            con.query(RF, (err, rs) =>{
                if(err){
                    res.redirect("/")
                }else{
                    var products = rs[0];
    
                    // var d = JSON.stringify(products);
                    // fs.writeFileSync("./backend-modules/eb.js", d)
    
                    // pagination
                    var N = rs[1][0]['COUNT(*)'],
                            URL = req._parsedOriginalUrl,
                            pagination_link = pagination.createPaginationLink(N, page, URL, 100);
    
                    res.render("enfant_bebe.html", {
                        products: products,
                        pagination_link: pagination_link
                    })
                }
            })
        }
    }
}

module.exports = ChildBaby;