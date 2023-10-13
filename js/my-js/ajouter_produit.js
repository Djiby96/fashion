/*
   1. Open file interface

   2. Ecrire le nombre de photos choisies

   3. Ajouter le type : clothing, shoes, accessoires ou sexe enfant

*/

// 1
var button_img = document.getElementById("button_img");
var input_file = document.getElementById("input_file");
button_img.addEventListener("click", () =>{
    input_file.click();
})

// 2
var text_imgs_select = document.getElementById("text_imgs_select");
input_file.addEventListener("change", () =>{
    var files = input_file.files
    text_imgs_select.classList.add("f-w-b");
    if(files.length >= 1){
        text_imgs_select.textContent = `${files.length} photos choisies`
        text_imgs_select.style.setProperty("color", "green", "important");
    }else{
        text_imgs_select.textContent = `Aucune photos choisies`
        text_imgs_select.style.setProperty("color", "red", "important");
    }
})

// 3
var cp = document.getElementById("cp"),
    cv = document.getElementById("cv"),
    container_type = document.getElementById("container_type"),
    tvh = document.getElementById("tvh"),
    tch = document.getElementById("tch"),
    tvf = document.getElementById("tvf"),
    ta = document.getElementById("ta"),
    ss = document.getElementById("ss");

[cp, cv].forEach((categorie) =>{
    categorie.addEventListener("change", () =>{
        var x = cp.value,
            y = cv.value;
    
        var container_type_child = container_type.firstElementChild;
        if(container_type_child){
            container_type.removeChild(container_type_child)
        }

        if(y == 'accessories'){
            container_type.appendChild(ta);
        }else if(x == 'child-baby'){
            container_type.appendChild(ss);
        }else if((x == 'men' || x== 'men-women') && y == 'clothing'){
            container_type.appendChild(tvh);
        }else if(x == 'women' && y == 'clothing'){
            container_type.appendChild(tvf);
        }else if(x == 'women' && y == 'shoes'){
            container_type.appendChild(tcf);
        }else if((x == 'men' || x=='men-women') && y == 'shoes'){
            container_type.appendChild(tch);
        }else{
            // nothing
        }
    })    
})    