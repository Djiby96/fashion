/*
  1. Changer le texte et la couleur du titre, remplir le menu de lien et l'element select de type clothing ou shoes

  2. Changer l'URL si le choix du prix est selectionnee

  3. Changer l'URL si le choix du type est selectionnee

  4. Selectionner le prix correspondant s'il existe dans l'url au chargement de la page

  5. Selectionner le type correspondant s'il existe dans l'url au chargement de la page

  6. Changer l'URL si le sex est selectionnee

  7. Selectionner le sexe au chargement de la page

*/

// 1
var title_page = document.getElementById("title_page"),
    sub_category = document.getElementById("sub_category"),
    st = document.getElementById("st");

var pathname = URLQueryString.getPathName();
if(pathname == "/men/clothing"){
    title_page.textContent = "Men's clothes";
    title_page.classList.add("bg-black");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Clothing type</option>`)

    SubCategorieData.men.clothing.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/men/clothing?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/men/shoes"){
    title_page.textContent = "Men's shoes";
    title_page.classList.add("bg-black");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Shoes type</option>`)

    SubCategorieData.men.shoes.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/men/shoes?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/men/accessories"){
    title_page.textContent = "Men's accessories";
    title_page.classList.add("bg-black");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Accessories type</option>`)

    SubCategorieData.men.accessories.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/men/accessories?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/women/clothing"){
    title_page.textContent = "Women's clothes";
    title_page.classList.add("bg-orange-woman");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Clothing type</option>`)

    SubCategorieData.women.clothing.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/women/clothing?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/women/shoes"){
    title_page.textContent = "Women's shoes";
    title_page.classList.add("bg-orange-woman");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Shoes type</option>`)

    SubCategorieData.women.shoes.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/women/shoes?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/women/accessories"){
    title_page.textContent = "Women's accessories";
    title_page.classList.add("bg-orange-woman");
    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Accessories type</option>`)

    SubCategorieData.women.accessories.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/women/accessories?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else if(pathname == "/boy/clothing"){
    title_page.textContent = "Boy's clothes";
    title_page.classList.add("bg-black");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Clothing type</option>`)

    SubCategorieData.men.clothing.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/boy/clothing?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/boy/shoes"){
    title_page.textContent = "Boy's shoes";
    title_page.classList.add("bg-black");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Shoes type</option>`)

    SubCategorieData.men.shoes.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/boy/shoes?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/boy/accessories"){
    title_page.textContent = "Boy's accessories";
    title_page.classList.add("bg-black");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Accessories type</option>`)

    SubCategorieData.boy.accessories.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/boy/accessories?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/girl/clothing"){
    title_page.textContent = "Girl's clothes";
    title_page.classList.add("bg-orange-woman");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Clothing type</option>`)

    SubCategorieData.women.clothing.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/girl/clothing?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/girl/shoes"){
    title_page.textContent = "Girl's shoes";
    title_page.classList.add("bg-orange-woman");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Shoes type</option>`)

    SubCategorieData.women.shoes.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/girl/shoes?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/girl/accessories"){
    title_page.textContent = "Girl's accessories";
    title_page.classList.add("bg-orange-woman");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Accessories type</option>`)

    SubCategorieData.girl.accessories.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/girl/accessories?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-orange-woman">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}
else if(pathname == "/baby/clothing"){
    title_page.textContent = "Baby clothes";
    title_page.classList.add("bg-black");
}
else if(pathname == "/baby/shoes"){
    title_page.textContent = "Baby shoes";
    title_page.classList.add("bg-black");
}
else if(pathname == "/baby/accessories"){
    title_page.textContent = "Baby accessories";
    title_page.classList.add("bg-black");

    st.insertAdjacentHTML('afterbegin', `<option value='' class='text-center'>Accessories type</option>`)

    SubCategorieData.baby.accessories.forEach((value, key) =>{
        sub_category.insertAdjacentHTML('beforeend', `<a href='/baby/accessories?type=${value}' class="py-2 px-3 text-white rounded bx-s-2 fs-095 ls-04 m-2 op-07 hover-bx-s-10 hover-op-1 bg-black">${key}</a>`)
        st.insertAdjacentHTML('beforeend', `<option value='${value}' class='text-center'>${key}</option>`)
    });
}else{
    
}
// 2
var sp = document.getElementById("sp");
sp.addEventListener("change", () =>{
    var sp_value = sp.value;
    if(sp_value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("price", sp_value)
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("price")
    }

    window.location.href = URL_REDIRECT; 
})

// 3
st.addEventListener("change", () =>{
    var st_value = st.value;
    if(st_value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("type", st_value),
            URL_REDIRECT = URLQueryString.deleteParameter("page")
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("type")
    }

    window.location.href = URL_REDIRECT; 
})

// 4
var check_prix_query = URLQueryString.checkParameter("price");
if(check_prix_query){
    var options = sp.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var sp_value = options[i].getAttribute("value");
        if(sp_value == check_prix_query){
            options[i].setAttributeNode(selected);
        }
    }
}

// 5
var check_type_query = URLQueryString.checkParameter("type");
if(check_type_query){
    var options = st.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var st_value = options[i].getAttribute("value");
        if(st_value == check_type_query){
            options[i].setAttributeNode(selected);
        }
    }

}

// const link_product = document.querySelectorAll(".link_product");
// link_product.forEach((link) =>{
//     var get_link = link.getAttribute("href");
//     console.log(get_link);
// })

// 6
const ss = document.getElementById("ss") || "";
ss.addEventListener("change", () =>{
    var value = ss.value;
    if(value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("sex", value),
            URL_REDIRECT = URLQueryString.deleteParameter("page");
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("sex")
    }

    window.location.href = URL_REDIRECT; 
})

// 7
var check_sex_query = URLQueryString.checkParameter("sex");
if(check_sex_query){
    var options = ss.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var value = options[i].getAttribute("value");
        if(value == check_sex_query){
            options[i].setAttributeNode(selected);
        }
    }
}
