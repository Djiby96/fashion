/*

  1. Changer l'URL si la category est selectionnee

  2. Changer l'URL si le sex est selectionnee

  3. Changer l'URL si le price est selectionnee

  4. Selectionner la category correspondant au chargement de la page

  5. Selectionner le sex au chargement de la page

  6. Selectionner le price au chargement de la page

*/

// 1
const sc = document.getElementById("sc");
sc.addEventListener("change", () =>{
    var value = sc.value;
    if(value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("category", value)
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("category")
    }

    window.location.href = URL_REDIRECT; 
})

// 2
const ss = document.getElementById("ss");
ss.addEventListener("change", () =>{
    var value = ss.value;
    if(value){
        var URL_REDIRECT = URLQueryString.changeURLParameters("sex", value)
    }else{
        var URL_REDIRECT = URLQueryString.deleteParameter("sex")
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
var check_category_query = URLQueryString.checkParameter("category");
if(check_category_query){
    var options = sc.children;
    var selected = document.createAttribute("selected");
    for(let i=0; i<options.length; i++){
        var sc_value = options[i].getAttribute("value");
        if(sc_value == check_category_query){
            options[i].setAttributeNode(selected);
        }
    }
}

// 5
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