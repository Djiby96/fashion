/*
    1. Afficher details vente
*/

const { log } = require("console");
var con = require("./MySQL"),
    fs = require("fs"),
    geoip = require('geoip-lite'),
    describePage = require("./describePage");

var DetailsProduct = {
    // 1
    page : (req, res) =>{
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        ip = ip.split(":").pop();

        // location
        var geo = geoip.lookup(ip) || false;

        var gender = req.params.gender,
            category = req.params.category,
            title_number = req.params.title_number,
            number = title_number.substring(title_number.lastIndexOf("-")+1),
            title = title_number.substring(0, title_number.lastIndexOf("-"));

        if((gender !='men' && gender !='women' && gender !='men-women' && gender !='baby' && gender !='boy' && gender !='girl' && gender !='boy-girl') || (category != 'clothing' && category !='shoes' && category !='accessories')){
            res.redirect("/");
        }else{
            var R1 = `SELECT product.*, REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', url_img, number_img, category ` + 
            `FROM product INNER JOIN images USING(number) INNER JOIN category USING(number) WHERE number=?`;

            var R2 = `SELECT product.*, REPLACE(title, ' ', '-') AS 'title_concat', REPLACE(FORMAT(price, 0), ',', ' ') AS 'price_format', `+ 
            `url_img, number_img, category FROM product INNER JOIN images USING(number) INNER JOIN category USING(number) `+
            `WHERE number !=? AND category='${category}' AND gender='${gender}' `


            // var data = fs.readFileSync("./backend-modules/dp.js", "utf-8") || '[]';
            // var p = JSON.parse(data);

            // var product = [];
            // p.forEach((list) =>{
            //     if(list.number == number){
            //         product.push(list);
            //     }
            // })

            if(gender =='men' || gender =='women'){
                R2 = R2 + `AND (gender='${gender}' || gender='men-women') `
            }else{
                R2 = R2 + `AND gender='${gender}' `
            }

            // var products_sim = [];
            // if(gender =="child-baby" || gender =="men-women"){
            //     p.forEach((product) =>{
            //         if(product.gender == gender && product.category == category){
            //             products_sim.push(product)
            //         }
            //     })
            // }else{
            //     p.forEach((product) =>{
            //         if((product.gender == gender || product.gender =='men-women') && product.category == category){
            //             products_sim.push(product)
            //         }
            //     })
            // }

            // if(product.length != 1){
            //     res.redirect("/");
            // }else{
            //     res.render("details_produit.html", {
            //         gender: gender,
            //         category: category,
            //         title_number: title_number,
            //         numero: numero,
            //         product: product[0],
            //         products_sim: products_sim.slice(0, 10)
            //     })
            // }    

            var type = req.query.type,
            against = type || title;
            if(type){
                R2 = R2 + `AND MATCH(type) AGAINST(?) ORDER BY date DESC LIMIT 0, 10`;
            }else{
                R2 = R2 + `AND MATCH(title) AGAINST(?) ORDER BY date DESC LIMIT 0, 10`;
            }
             
            var RF = R1 + ";" + R2;

            // keywords

            con.query(RF, [number, number, against], (err, rs) =>{
                if(err){
                    console.log(err);
                    res.redirect("/");
                }else{
                    var products = rs[0],
                        products_sim = rs[1];   

                    // var d = JSON.stringify(products);
                    // fs.writeFileSync("./backend-modules/dp.js", d)    

                    if(products.length != 1){
                        res.redirect("/");
                        console.log(err, "Probleme");
                    }else{
                        var product = products[0];
                        console.log(product);

                        // keywords
                        var keywords = category + " for " + gender;
                        if(gender == "men-women"){
                            keywords = category + " for " + "men and women";
                        }else if(gender == "boy-girl"){
                            keywords = category + " for " + "boy and girl";
                        }else{
                            if(product.type){
                                var title_describe = describePage.get("/"+gender+"/"+category+"?type="+product.type);
                                if(title_describe){
                                    keywords = describePage.get("/"+gender+"/"+category+"?type="+product.type).title;
                                }
                            }else{
                                var title_describe = describePage.get("/"+gender+"/"+category+"?type="+product.type);
                                if(title_describe){
                                    keywords = describePage.get("/"+gender+"/"+category).title;
                                }
                            }
                        }
                        res.render("details_produit.html", {
                            countryCode: geo.country,
                            gender: gender,
                            category: category,
                            title_number: title_number,
                            number: number,
                            product: product,
                            keywords: keywords,
                            products_sim: products_sim
                        })
                    }    
                }
            })

        }
    }
}

module.exports = DetailsProduct;