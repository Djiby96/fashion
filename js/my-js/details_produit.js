/*
   1. Choisir le petit image cliquer

   2. Detection du country
*/

// 1
var small_imgs = document.querySelectorAll(".small_imgs"),
    img_dt = document.getElementById("img_dt");
small_imgs.forEach((img) =>{
    img.addEventListener("click", () =>{
        var src = img.getAttribute("src");
        img_dt.setAttribute("src", src);
    })
})    


// 2
var tn = document.getElementById("tn");
var countryCode = tn.getAttribute("cc");
var countryDetect = new Intl.DisplayNames(['en'], {type: 'region'});
if(countryCode){
    var countryName = countryDetect.of(countryCode); 
    tn.innerHTML = `It appears to us that we see your exact location in the <span class='text-uppercase'>${countryName}</span>, and `+ 
    `we have noticed that our Amazon store is closer to you. If you wish to purchase this product, we will `+
    `do so from this store for a quick and cost-effective delivery. Thank you!`
}else{
    tn.textContent = `Our geolocation system has noticed that our subsidiary store on Amazon is closer to you. If you wish to purchase this product, we will `+
    `do so from this store for a quick and cost-effective delivery. Thank you!`;
}
