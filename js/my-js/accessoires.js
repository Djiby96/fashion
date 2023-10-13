/*

  1. Changer l'URL si le gender est selectionnee

  2. Changer l'URL si le type est selectionnee

  3. Changer l'URL si le price est selectionnee

  4. Selectionner le gender correspondant au chargement de la page

  5. Selectionner le type au chargement de la page

  6. Selectionner le price au chargement de la page

*/

// 1
const sg = document.getElementById("sg");
sg.addEventListener("change", () =>{
    var sg_value = sg.value;
    if(sg_value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("gender", sg_value)
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("gender")
    }

    window.location.href = URL_REDIRECT; 
})

// 2
const st = document.getElementById("st");
st.addEventListener("change", () =>{
    var st_value = st.value;
    if(st_value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("type", st_value)
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("type")
    }

    window.location.href = URL_REDIRECT; 
})

// 3
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


// 4
var check_gender_query = URLQueryString.checkParameter("gender");
if(check_gender_query){
    var options = sg.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var sg_value = options[i].getAttribute("value");
        if(sg_value == check_gender_query){
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

// 6
var check_price_query = URLQueryString.checkParameter("price");
if(check_price_query){
    var options = sp.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var sp_value = options[i].getAttribute("value");
        if(sp_value == check_price_query){
            options[i].setAttributeNode(selected);
        }
    }
}