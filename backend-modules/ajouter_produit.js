/*
    1. page ajout produit

    2. POST : ajout de produit
*/

var Files = require("./Files.js"),
    con = require("./MySQL.js");

var AddProduct = {
    // 1
    page : (req, res) =>{
        // var cc = req.signedCookies.cc;
        // if(cc){
        //     res.redirect("/connexion-admin")
        // }else{
        //     res.render("ajouter_produit.html");
        // }

        res.render("ajouter_produit.html");
    },

    adding: (req, res) =>{
        var cc = req.signedCookies.cc;
        if(!cc && "x"=="y"){
            res.redirect("/connexion-admin")
        }else{
            var b = req.body,
                files = req.files;

            //download files
            var img_data_table = Files.upload(files, "./images/product/");
            
            // table product
            var Tp = [img_data_table[2], b.title, b.price, b.gender, b.type || '', b.partenaire, b.affiliate_link, b.description];
            var Rp = `INSERT INTO product(number, title, price, gender, type, partenaire, affiliate_link, description) VALUES (?)`;

            // table images
            var Ti = img_data_table;
            var Ri = `INSERT INTO images VALUES (?)`

            // table categorie
            var Tc = [b.category, "", img_data_table[2]]
            var Rc = `INSERT INTO category VALUES (?)`
            if(b.gender == 'child-baby'){
                Tc[1] = b.sub_category; 
            }

            var D = [Tp, Ti, Tc];
            var R = "START TRANSACTION;" + Rp + ";" + Ri + ";" + Rc + ";COMMIT";
            con.query(R, D, (err, rs) =>{
                if(err){
                    res.redirect("/espace-admin/ajouter-produit");
                }else{
                    req.flash("message", "success/Vente ajoutée avec succès.")
                    res.redirect("/espace-admin/ajouter-produit");
                }
            })
        }
    }
}

module.exports = AddProduct;