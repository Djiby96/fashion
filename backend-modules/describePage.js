
var describePage = new Map([
    ["/men/clothing", {title:"Clothing for men", description:"t-shirts, pants, jeans, joggers, polos, lacoste, sweaters, cardigans, coats, jackets, shorts, shirt, suit, boxers, briefs, sock, hosiery, jallaba, sabador, tunic, fabric, bazin"}],
    ["/men/shoes", {title:"Shoes for men", description:"sports shoes, boots, ankle boots, loafers, oxfords, derbies, sandals, open-toe shoes, slippers, espadrilles"}],
    ["/men/accessories", {title:"Accessories for men", description:"hair, belts, perfumes, handbags, suitcases, backpacks, Skin Care, hats, caps, computer bags, wallets, purses, gloves, mittens, children's toys, glasses, watches, playstation, games, pockets, saddlebags, pencil cases"}],
    ["/women/clothing", {title:"Clothing for women", description:"tights, jeans, pants, sweaters, cardigans, coats, jackets, joggers, shirt, suit, pajamas, leggings, dress, sock, hosiery, swimsuits, panties, t-shirts, polos, lacoste, jumpsuits, rompers, overalls, abaya, jallaba, fabric, bazin"}],
    ["/women/shoes", {title:"Shoes for women", description:"flats, heels, pumps, atheletic shoes, loafers, oxfords, derbies, boots, ankle boots, sandals, open-toe shoes, slippers, espadrilles"}],
    ["/women/accessories", {title:"Accessories for women", description:"hair, belts, makeup, perfumes, handbags, headbands, suitcases, backpacks, Skin Care, hats, caps, computer bags, wallets, purses, children's toys, gloves, mittens, glasses, watches, playstation, games, bracelets, chains, jewelry, pockets, saddlebags, pencil cases"}],
    ["/boy/clothing", {title:"Clothing for boy's", description:"t-shirts, pants, jeans, joggers, polos, lacoste, sweaters, cardigans, coats, jackets, shorts, shirt, suit, boxers, briefs, sock, hosiery, jallaba, sabador, tunic, fabric, bazin"}],
    ["/boy/shoes", {title:"Shoes for boy's", description:"sports shoes, boots, ankle boots, loafers, oxfords, derbies, sandals, open-toe shoes, slippers, espadrilles"}],
    ["/boy/accessories", {title:"Accessories for boy's", description:"belts, backpacks, hats, caps, gloves, mittens, children's toys, glasses, watches, playstation, games"}],
    ["/girl/clothing", {title:"Clothing for girl's", description:"tights, jeans, pants, sweaters, cardigans, coats, jackets, joggers, shirt, suit, pajamas, leggings, dress, sock, hosiery, swimsuits, panties, t-shirts, polos, lacoste, jumpsuits, rompers, overalls, abaya, jallaba, fabric, bazin"}],
    ["/girl/shoes", {title:"Shoes for girl's", description:"flats, heels, pumps, atheletic shoes, loafers, oxfords, derbies, boots, ankle boots, sandals, open-toe shoes, slippers, espadrilles"}],
    ["/girl/accessories", {title:"Accessories for girl's", description:"belts, makeup, backpacks, hats, caps, gloves, mittens, children's toys, glasses, watches, playstation, games, bracelets, chains, jewelry"}],
    ["/baby/clothing", {title:"Clothing for baby", description:"Explore our charming collection of baby clothes, thoughtfully designed to provide comfort and style for your little one. From soft and practical onesies to adorable matching sets, each piece is crafted to accompany the precious moments of your baby's growth. Made with quality materials, our clothes are as cute as they are functional."}],
    ["/baby/shoes", {title:"Shoes for baby", description:"Discover our delightful range of baby shoes, crafted with utmost care to ensure comfort and style for your little bundle of joy. From soft, flexible booties to adorable little sneakers, each pair is designed to support those important first steps. Made with high-quality materials, our shoes are not only cute but also provide the perfect fit for tiny feet."}],
    ["/baby/accessories", {title:"Accessories for baby", description:"Explore our charming collection of baby accessories, meticulously curated to add a touch of comfort and cuteness to your little one's ensemble. From soft, snugly blankets to adorable hats and mittens, each piece is crafted with love to make your baby feel extra special. Made with premium materials, our accessories are both practical and adorable, perfect for cherishing those precious moments."}],
    ["/men/clothing?type=suit", {title:"Suit for men"}],
    ["/men/clothing?type=t-shirts-polos-lacoste", {title:"t-shirts, polos and lacoste for men"}],
    ["/men/clothing?type=pants", {title:"Pants for men"}],
    ["/men/clothing?type=jeans", {title:"Jeans for men"}],
    ["/men/clothing?type=joggers", {title:"Joggers for men"}],
    ["/men/clothing?type=shirt", {title:"Shirt for men"}],
    ["/men/clothing?type=shorts", {title:"Short for men"}],
    ["/men/clothing?type=sock-hosiery", {title:"Sock  and hosiery for men"}],
    ["/men/clothing?type=boxers-briefs", {title:"boxers and briefs for men"}],
    ["/men/clothing?type=tanks", {title:"tanks for men"}],
    ["/men/clothing?type=jallaba-sabador-tunic-fabric-bazin", {title:"Jallaba, Sabador, Tunic, Fabric and bazin for men"}],
    ["/men/clothing?type=sweaters-cardigans-coats-jackets", {title:"Sweater, Cardigans, Coats and Jackets for men"}],
    ["/men/shoes?type=sports-shoes", {title:"Sport shoes for men"}],
    ["/men/shoes?type=boots-ankle-boots", {title:"boots and ankle boots shoes for men"}],
    ["/men/shoes?type=loafers-oxfords-derbies", {title:"loafers, oxfords and derbies shoes for men"}],
    ["/men/shoes?type=sandals-open-toe-shoes-slippers-espadrilles", {title:"sandals, open toe shoes, slippers, espadrilles for men"}],
    ["/men/shoes?type=traditional-african", {title:"traditional african shoes for men"}],
    ["/women/clothing?type=pants", {title:"Pants for women"}],
    ["/women/clothing?type=jeans", {title:"Jeans for women"}],
    ["/women/clothing?type=shirt", {title:"Shirt clothing for women"}],
    ["/women/clothing?type=t-shirts-polos-lacoste", {title:"T-shirts, polos and lacoste for women"}],
    ["/women/clothing?type=joggers", {title:"Joggers clothing for women"}],
    ["/women/clothing?type=leggings", {title:"Leggings clothes for women"}],
    ["/women/clothing?type=sweaters-cardigans-coats-jackets", {title:"Sweaterm cardigan, coat and jacket for women"}],
    ["/women/clothing?type=jumpsuits-rompers-overalls", {title:"Jumpsuits, rompers and overalls clothes for women"}],
    ["/women/clothing?type=pajamas", {title:"pajamas clothes for women"}],
    ["/women/clothing?type=tights", {title:"tights clothes for women"}],
    ["/women/clothing?type=sock-hosiery", {title:"sock, hosiery for women"}],
    ["/women/clothing?type=bra", {title:"bra clothes for women"}],
    ["/women/clothing?type=veil", {title:"Veil for women"}],
    ["/women/clothing?type=suit", {title:"Suit clothing for women"}],
    ["/women/clothing?type=shorts", {title:"Short clothing for women"}],
    ["/women/clothing?type=swimsuits-panties", {title:"Swimsuit, panties for women"}],
    ["/women/clothing?type=abaya-jallaba-fabric-bazin", {title:"Abaya, jallaba, fabric, bazin for women"}],
    ["/women/shoes?type=sports-shoes", {title:"Sport shoes for women"}],
    ["/women/shoes?type=boots-ankle-boots", {title:"boot and ankle boot shoes for women"}],
    ["/women/shoes?type=traditional-african", {title:"traditional african shoes for women"}],
    ["/women/shoes?type=flats-heels-pumps", {title:"flat, heels and pumps shoes for women"}],
    ["/women/shoes?type=loafers-oxfords-derbies", {title:"loafer, oxford and derbies shoes for women"}],
    ["/women/shoes?type=sandals-open-toe-shoes-slippers-espadrilles", {title:"sandals, slippers, espadrilles shoes  for women"}],
    ["/men/accessories?type=hair", {title:"Accessoiries for hair men"}],
    ["/men/accessories?type=belts", {title:"Belts for men"}],
    ["/men/accessories?type=perfumes", {title:"Perfume and flagrance for men"}],
    ["/men/accessories?type=handbags", {title:"handbags for men"}],
    ["/men/accessories?type=suitcases", {title:"Suitcases for men"}],
    ["/men/accessories?type=backpacks", {title:"backpacks for men"}],
    ["/men/accessories?type=skin-care", {title:"Skin care for men"}],
    ["/men/accessories?type=hats-caps", {title:"hats and caps for men"}],
    ["/men/accessories?type=computer-bags", {title:"Computer bags for men"}],
    ["/men/accessories?type=wallets-purses", {title:"Wallets and purses for men"}],
    ["/men/accessories?type=gloves-mittens", {title:"Gloves and mittens for men"}],
    ["/men/accessories?type=childrens-toys", {title:"childrens toys"}],
    ["/men/accessories?type=glasses-watches", {title:"Glasses and watches for men"}],
    ["/men/accessories?type=playstation-games", {title:"Games and playstation for men"}],
    ["/men/accessories?type=pockets-saddlebags-pencil-cases", {title:"Pockets, saddlebags, pencil cases for men"}],
    ["/women/accessories?type=hair", {title:"Hair for women"}],
    ["/women/accessories?type=belts", {title:"Belts for women"}],
    ["/women/accessories?type=makeup", {title:"Makeup for women"}],
    ["/women/accessories?type=perfumes", {title:"Perfume and flagrance for women"}],
    ["/women/accessories?type=handbags", {title:"handbags for women"}],
    ["/women/accessories?type=headbands", {title:"headbands for women"}],
    ["/women/accessories?type=suitcases", {title:"suitcases for women"}],
    ["/women/accessories?type=backpacks", {title:"backpacks for women"}],
    ["/women/accessories?type=skin-care", {title:"Skin care for women"}],
    ["/women/accessories?type=hats-caps", {title:"hats and caps for women"}],
    ["/women/accessories?type=computer-bags", {title:"Computer bags for women"}],
    ["/women/accessories?type=wallets-purses", {title:"Wallet and purses for women"}],
    ["/women/accessories?type=childrens-toys", {title:" Children toys for women"}],
    ["/women/accessories?type=gloves-mittens", {title:"Glove and mitten for women"}],
    ["/women/accessories?type=glasses-watches", {title:"Glasse and watche for women"}],
    ["/women/accessories?type=playstation-games", {title:"Playstation and game for women"}],
    ["/women/accessories?type=bracelets-chains-jewelry", {title:"Jewelry, chains and bracelets for women"}],
    ["/women/accessories?type=pockets-saddlebags-pencil-cases", {title:"Pockets, saddlebags, pencil cases for women"}],
    ["/baby/accessories?type=safety", {title:"Safety for baby"}],
    ["/baby/accessories?type=bottles", {title:"Baby bottles"}],
    ["/baby/accessories?type=monitors", {title:"Monitors for baby"}],
    ["/baby/accessories?type=diapering", {title:"Diapers for baby"}],
    ["/baby/accessories?type=car-seats", {title:"Car seats for baby"}],
    ["/baby/accessories?type=baby-care", {title:"Care for baby"}],
    ["/baby/accessories?type=baby-toys", {title:"Toys for baby"}],
    ["/baby/accessories?type=beds-cribs", {title:"Beds ands cribs for baby"}],
    ["/baby/accessories?type=baby-wipes", {title:"Wipes for baby"}],
    ["/baby/accessories?type=diaper-bags", {title:"Diapers bags for baby"}],
    ["/baby/accessories?type=bibs", {title:"bibs for baby"}],
    ["/baby/accessories?type=baby-bathtubs", {title:"Bathtub for baby"}],
    ["/baby/accessories?type=baby-blankets", {title:"Blankets for baby"}],
    ["/baby/accessories?type=strollers-prams", {title:"Strollers and Prams for baby"}],
    ["/baby/accessories?type=teats-pacifiers", {title:"Teats and pacifiers for baby"}],
    ["/baby/accessories?type=others", {title:"All accessories for baby"}]
])


module.exports = describePage;