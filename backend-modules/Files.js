/*
   1. Telecharger les photos
*/

var fs = require("fs"),
    Utilitaire = require("./Utilitaire.js");

class Files{

    // 1
    static upload(files, destination){
        var date_file = Utilitaire.getDateFormat("_"),
            number = Utilitaire.getReference();

        var number_img=0;
        for(let i = 0; i<files.length;i++){
            var file_upload_src = destination + date_file + "_" + number + "_" + (i+1) + ".jpg";
            try{
                fs.createWriteStream(file_upload_src).write(files[i].buffer);
                number_img++;
            }catch(error){
                return null
            }
        } 
        
        var url_img = "/product/" + date_file + "_" + number + "_" + 1 + ".jpg";
        var img_data_table = [url_img, number_img, number];

        return img_data_table;
    }

}

module.exports = Files;