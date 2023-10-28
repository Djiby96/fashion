/*
   1. Open file interface

   2. Ecrire le nombre de photos choisies

   3. Ajouter le type : clothing, shoes, accessoires ou sexe enfant

*/

// 1
// var button_img = document.getElementById("button_img");
// var input_file = document.getElementById("input_file");
// button_img.addEventListener("click", () =>{
//     input_file.click();
// })

// // 2
// var text_imgs_select = document.getElementById("text_imgs_select");
// input_file.addEventListener("change", () =>{
//     var files = input_file.files
//     text_imgs_select.classList.add("f-w-b");
//     if(files.length >= 1){
//         text_imgs_select.textContent = `${files.length} photos choisies`
//         text_imgs_select.style.setProperty("color", "green", "important");
//     }else{
//         text_imgs_select.textContent = `Aucune photos choisies`
//         text_imgs_select.style.setProperty("color", "red", "important");
//     }
// })

// 3
var cp = document.getElementById("cp"),
    cv = document.getElementById("cv"),
    container_type = document.getElementById("container_type"),
    tvh = document.getElementById("tvh"),
    tch = document.getElementById("tch"),
    tvf = document.getElementById("tvf"),
    taf = document.getElementById("taf"),
    tah = document.getElementById("tah"),
    tab = document.getElementById("tab"),
    tag = document.getElementById("tag"),
    ta_baby = document.getElementById("ta_baby"),
    ss = document.getElementById("ss");

[cp, cv].forEach((categorie) =>{
    categorie.addEventListener("change", () =>{
        var x = cp.value,
            y = cv.value;
        
        container_type.replaceChildren();    

        if(x == 'baby'){
            container_type.replaceChildren(ta_baby, ss);
        }else if((x == 'men' || x== 'men-women') && y == 'clothing'){
            container_type.replaceChildren(tvh);
        }else if(x == 'women' && y == 'clothing'){
            container_type.replaceChildren(tvf);
        }else if(x == 'women' && y == 'shoes'){
            container_type.replaceChildren(tcf);
        }else if((x == 'men' || x=='men-women') && y == 'shoes'){
            container_type.replaceChildren(tch);
        }else if((x == 'men' || x== 'men-women') && y == 'accessories'){
            container_type.replaceChildren(tah);
        }else if(x == 'women' && y == 'accessories'){
            container_type.replaceChildren(taf);
        }else if((x == 'boy' || x== 'boy-girl') && y == 'clothing'){
            container_type.replaceChildren(tvh);
        }else if((x == 'boy' || x== 'boy-girl') && y == 'shoes'){
            container_type.replaceChildren(tch);
        }else if((x == 'boy' || x== 'boy-girl') && y == 'accessories'){
            container_type.replaceChildren(tab);
        }else if(x == 'girl' && y == 'clothing'){
            container_type.replaceChildren(tvf);
        }else if(x == 'girl' && y == 'shoes'){
            container_type.replaceChildren(tcf);
        }else if(x == 'girl' && y == 'accessories'){
            container_type.replaceChildren(tag);
        }else{
            // nothing
        }
    })    
})    