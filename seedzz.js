const Faker = require('faker');
const db = require('./server/db');
const Product = require('./server/db/models/product')
const Category = require('./server/db/models/category')
const User = require('./server/db/models/user')


db
  .sync( {force:true} )
  .then( () =>{
    console.log('seeding database with categories!');
    return Category.bulkCreate([
      {
       name: 'Scotch'
      },
      {
        name: 'Rye'
      },
      {
        name: 'Bourbon'
      },
      {
        name: 'Irish Whiskey'
      },
      {
        name: 'Japanese Whiskey'
      },
      {
        name: 'Accessories'
      }
    ]);
  })
  .then( () =>{
    console.log('Seeding database with products!');
    return Product.bulkCreate([
      {
        name: 'Lagavulin 16 Year',
        price: 69.99,
        description: "Located in Port Ellen on Islay, Lagavulin is the smoky powerhouse of the Diageo Classic Malts selection. Their pot stills are short and fat, which creates a heavy, oily spirit. The 16-year-old expression is rich, heavy, and smoky. It is full-bodied with core fruit notes integrated with robust spice, smoke, tobacco, and seaweed flavors. This dram is either loved or hated for its intensity, but at least every drinker has a definitive opinion on it.",
        imageURL: "https://www.whisky-onlineauctions.com/images/auction/6715-140.jpg",
        quantity: 100
      },
      {
        name: 'Black Bull 12 Year',
        price: 55.96,
        description: "Bottled at 100-proof with a core of malts each aged individually for a minimum of 12 years that includes, Clynelish, Mortlach, Ben Nevis, Linkwood, Tullibardine, and a little Islay malt Duncan Taylor is clearly making a statement with this much awarded excellent blended whisky. Stand-out notes include, black cherry, dried peaches, red licorice, dried cane, cinnamon, heather, and a touch of smoke. This will satisfy the most discerning drinker as well as the beginner. ",
        imageURL: "https://cdn3.masterofmalt.com/whiskies/black-bull-12-year-old-whisky.jpg",
        quantity: 100
      },
      {
        name: 'Ardbeg 10 Year',
        price: 51.99,
        description: "For peat lovers, nothing compares to Ardbeg. A heavy, pungent malt that is surprisingly gentle and citrusy on the palate. Its fanatical followers ensure that this distillery is always low on stock, so get it while it lasts!",
        imageURL: "https://img.thewhiskyexchange.com/900/abgob.10yov1.jpg",
        quantity: 100
      },
      {
        name: 'Bruichladdich The Laddie Scottish Barley',
        price: 56.97,
        description: "Meant to be the benchmark and anchor in a portfolio of whiskies that takes some wild and wonderful turns the Laddie Scottish Barley is unpeated, un-chillfiltered, and one of the best and most unique expressions of Islay whisky available anywhere. Salt, sea, heather, grass, malt, honey, and more come together for a refreshingly drinkable experience.",
        imageURL: "http://www.astorwines.com/images/items/31335_hr.jpg",
        quantity: 100
      },
      {
        name: 'Compass Box Orangerie',
        price: 49.99,
        description: "Compass Box makes handcrafted, small batch blended whisky from the best distilleries in Scotland. Orangerie is Scotland’s only whisky infusion, in this case made with oranges and spices. Great with chocolate, as an after dinner drink, or put a dash in your favorite cocktail to spice things up.",
        imageURL: "https://www.drinkhacker.com/wp-content/uploads/2009/10/compass-box-orangerie-whisky.jpg",
        quantity: 100
      },
      {
        name: 'Dun Bheagan Inchgower 31 Yr. Scotch',
        price: 449.96,
        description: "Inchgower is a distillery that is sometimes overlooked because most of their malts go into blending. There is a reason that malt whisky from this Speyside distillery is so sought after. Intense aromas of honeydew and watermelon, combined with crusty buttered pastry, only scratch the surface of complexity here. Citrus, stone fruits, vanilla, spice, and a delightful finish of freshly-fried glazed donuts make this one of the finest whiskies on our shelves. Rare and limited.",
        imageURL: "http://www.astorwines.com/images/items/29594_hr.jpg",
        quantity: 100
      },
      {
        name: 'Michter\'s US 1 Straight Rye',
        price: 43.99,
        description: "Michter's is one of the country's oldest distilleries dating from 1753. Their secret is the filtration process, which creates a very smooth taste. Honey flavors at first with a long finish of vanilla and oak.",
        imageURL: "https://media2.caskers.com/media/catalog/product/cache/1/thumbnail/1000x/9df78eab33525d08d6e5fb8d27136e95/m/i/michter_s-us1-rye-whiskey-1.jpg",
        quantity: 100
      },
      {
        name: 'Bulleit Rye',
        price: 36.97,
        description: "This straight rye whiskey is distilled from a 95% rye mash with a splash of malted barley (5%). Aged for 4-7 years and bottled at 90 proof, this has that raw-grain taste we love in a rye, along with cherry fruit, vanilla, tobacco, and a touch of honey. How about using it in your next Manhattan or Vieux Carré?",
        imageURL: "http://www.astorwines.com/images/items/24636_hr.jpg",
        quantity: 100
      },
      {
        name: 'A.D. Laws Straight Rye Whiskey',
        price: 69.96,
        description: "Officially founded in 2004 with the original Head Distiller of Stranahan's manning the stills, this sharp Denver outfit is poised to become a go-to source for great American whiskey. Batch two of their rye is made with an heirloom variety of the grain grown for them in the San Luis River Valley at the Cody Family Farm. Fermented naturally in open air, distilled slowly and at a cooler temperature, barreled in full size 53 gallon American oak from Independent Stave, and bottled after three years at 100 proof. Notes include sweet BBQ spices, dark chocolate malt, herbal tea, cocoa, granola, and rhubarb.",
        imageURL: "http://www.astorwines.com/images/items/33862_hr.jpg",
        quantity: 100
      },
      {
        name: 'Catoctin Creek Roundstone Rye',
        price: 44.96,
        description: "From one of the few distilleries operating in the south, Catoctin is a solid craft outfit with a focus on producing top-notch organic rye whiskey. The Roundstone is fresh, lively, and energetic with the purity of the high quality grain coming through with spice notes, as well as citrus fruits and toasted breads.",
        imageURL: "",
        quantity: 100
      },
      {
        name: 'Sazerac Rye',
        price: 46.00,
        description: "The One and Only New Orleans Original. Sazerac Rye Whiskey symbolizes the tradition and history of New Orleans. Rye Whiskey that dates back to the 1800’s, around the time when saloons, veiled as Coffee Houses, began lining the streets of New Orleans. It was at the Sazerac Coffee House on Royal Street where local patrons were served toddies made with Rye Whiskey and Peychaud’s Bitters. The libation became known as the “Sazerac” and America’s first branded cocktail was born. This is the whiskey that started it all.",
        imageURL: "https://cdn2.masterofmalt.com/whiskies/sazerac/sazerac-straight-rye-whiskey.jpg?square=1",
        quantity: 100
      },
      {
        name: 'Elijah Craig Small Batch Bourbon',
        price: 26.99,
        description: "Craig is the Southern Baptist minister who is widely considered the Father of Bourbon after discovering (likely out of lucky necessity) the flavors imparted by storing his whisky in charred oak barrels. This bourbon is firm, malty and sweet with apricot fruitiness and a long, smoky vanilla finish.",
        imageURL: "http://www.astorwines.com/images/items/00294_hr.jpg",
        quantity: 100
      },
      {
        name: 'Blade and Bow Kentucky Straight Bourbon',
        price: 59.96,
        description: "Blade and Bow is the latest release from Diageo's treasure trove of whiskies stored at the vaunted Stitzel-Willer Distillery. In this expression, they have taken a lesser traveled road, by opting for the Solera blending system in which the whiskey is blended from barrel to barrel to barrel, incorporating whiskies of many ages. As quality whiskies become harder and harder to find, expect to see this technique more often. There is quite a lot to enjoy in this bottle: Deep red fruit on the nose is followed by ample caramel, baking spices, and wood spice. The palate shows more wood with dark apple, banana, and an inviting hint of black pepper on the finish. It isn't very heavy either... sit back and enjoy it this summer!",
        imageURL: "http://www.astorwines.com/images/items/32937_hr.jpg",
        quantity: 100
      },
      {
        name: 'Coppersea Excelsior Bourbon',
        price: 99.96,
        description: "Coppersea is a true farm distillery situated in the historic rolling hills of New York's Hudson River Valley. Virtually all of the production for their spirits are done in house including growing nearly all of their own grains on-site at the farm. This category breaking bourbon is also the first of its kind that was aged exclusively in new barrels fashioned from local New York Oak. After aging for over a year the whiskey is fruity, spicy and robust with decadent notes of french toast, peach rings, vanilla, black pepper, mandarin orange, coconut cake, milk chocolate, rooibos tea and cedar.",
        imageURL: "http://www.astorwines.com/images/items/35184_hr.jpg",
        quantity: 100
      },
      {
        name: 'A. D. Laws Bottled in Bond Bourbon',
        price: 69.99,
        description: "The culmination of countless hours of sweat and experimentation has lead to this historic release of batch 1 Bottled in Bond four grain bourbon from one of the better artisan distillers operating in the States today. The whiskey is spicy, concentrated and layered with flavors that balance sweet and savory scales with precision. We could happily sip on this all day.",
        imageURL: "http://www.astorwines.com/images/items/36708.jpg",
        quantity: 100
      },
      {
        name: 'George T. Stagg Kentucky Straight Bourbon',
        price: 849.95,
        description: 'This extremely hearty whiskey ages in new charred oak barrels for no less than 15 years.  Straight out of the barrel, uncut and unfiltered, the taste is powerful, flavorful and intense. Open it up with a few drops of water, sit back and ponder the wonders of the universe. Lush toffee sweetness and dark chocolate with hints of vanilla, fudge, nougat and molasses. Underlying notes of dates, tobacco, dark berries, spearmint and a hint of coffee round out the palate.',
        imageURL: "http://cdn2.bigcommerce.com/server2800/a04d0/products/13314/images/14114/george-t-stagg-kentucky-straight-bourbon-whiskey__69532.1508583383.1280.1280.jpg?c=2",
        quantity: 10
      },
      {
        name: 'Tullamore D.E.W.',
        price: 34.99,
        description: "The Tullamore name represents one of Ireland's greatest distilleries. The 'DEW' was added in honor of Daniel E Williams, ex employee turned general manager overnight. This Whiskey has a pale golden amber color with caramel and dried reed aromas. On the palate, more caramel and toasted nuts. Nice light spice finish.",
        imageURL: "http://www.astorwines.com/images/items/34462.jpg",
        quantity: 100
      },
      {
        name: 'Powers Irish Whiskey',
        price: 37.99,
        description: "Historically, Jameson's biggest Dublin rivals, have teamed up through the Irish Distillers Group to make them an ultimate Power-house. Slightly spicy with a honey like sweetness make this one of our preferred Irish drams. Blind taste this against Jameson and see what you think!",
        imageURL: "http://www.astorwines.com/images/items/01716_hr.jpg",
        quantity: 100
      },
      {
        name: 'Midleton Very Rare Irish Whiskey',
        price: 144.00,
        description: "Midleton Very Rare is one of the most exclusive whiskeys ever produced in Ireland. Exclusively matured in American oak barrels, this whiskey is only available in strictly limited quantities as just a small number of casks are personally selected by the Master Distiller, Brian Nation. (Prior to 2014 the Master Distiller was Barry Crockett). An annual selection since 1984 and thus, very collectable, each bottle is individually numbered and bears the signature of the Master Distiller as a final guarantee of outstanding quality.",
        imageURL: "https://media2.caskers.com/media/catalog/product/cache/1/image/8098fa9a8bdf2c28760c2d2c80a1898c/m/i/midleton-very-rare-irish-whiskey.jpg",
        quantity: 100
      },
      {
        name: 'Redbreast 12 Yr. Irish Whiskey',
        price: 56.99,
        description: "Contrary to what the Beowulf-like John Jameson ads would have you believe, there are other Irish whiskies worth drinking. In fact, Redbreast, and other single pot still whiskies like it, are as complex and powerful as their famous neighbor Scotch whiskies. Its nose unleashes rich toffee, dried coconut, caramelized bananas, and cured bacon. The palate that follows is equally impressive. Once the dram is tipped into your mouth, expect brown sugar, molasses, sweet coconut, and candied fruit. Redbreast doesn't have ads with a mythic Irishman dragging casks across a frozen ocean, but one should still find that they make damn good whiskey!",
        imageURL: "",
        quantity: 100
      },
      {
        name: 'Green Spot Pot Still Irish Whiskey',
        price: 59.99,
        description: "Begun in the 1840s and established as a premium brand in the 1920s, this historic, single-pot still Irish whisky is finally available stateside. Created from a distillation of malted and un-malted barley and aged five to eight years in both used bourbon and Sherry wood, the result is very apple-driven and creamy, with a hint of sweet. It's easy-drinking, with a dry finish of honey and nuts.",
        imageURL: "http://www.astorwines.com/images/items/30372_hr.jpg",
        quantity: 100
      },
      {
        name: 'Teeling Single Malt Irish Whiskey',
        price: 59.99,
        description: "The eagerly anticipated Teeling Single Malt Irish Whiskey, made with 100% malt whiskeys. A selection of five wine-cask-finished-whiskeys were used for this release, including Sherry, Port, Madeira, White Burgundy and Cabernet Sauvignon. Exciting, delicious stuff from the Teeling chaps in Dublin.",
        imageURL: "http://www.astorwines.com/images/items/33558.jpg",
        quantity: 100
      },
      {
        name: 'Yamazaki 12 Year Japanese Whiskey',
        price: 114.96,
        description: "The original Japanese single malt is taking the world by storm. After winning the most prestigious awards and accolades on the planet, supplies have become scarce. Aged for a full 12 years before release and drawn from a variety of whisky stocks, the range and drinkability are unlike anything else.",
        imageURL: "http://www.astorwines.com/images/items/01604_hr.jpg",
        quantity: 100
      },
      {
        name: 'The Hakushu 12 Year Japanese Whiskey',
        price: 99.96,
        description: "On the nose it opens with a bouquet of fresh green leaves, green apple, pear, and soft smoke. On the palate, pear and butter cookie flavors give it a crisp yet sweet taste. The finish is soft, pleasantly-smoked, and dry - with almost minty undertones. ONLY 12 BOTTLES PER CUSTOMER",
        imageURL: "http://www.astorwines.com/images/items/26289_hr.jpg",
        quantity: 100
      },
      {
        name: 'Hibiki Japanese Harmony Blended Whiskey',
        price: 64.99,
        description: "Suntory's latest release is a harmonious blend of over 10 malt and grain whiskies that display all the elegance and complexity we've come to expect from Suntory. The Hibiki range perfectly exemplifies the best and most unique qualities of Japanese whisky. In addition to choice single malts selected from both the Yamazaki and Hakushu distilleries additional corn-based grain whisky was included in this blend from Suntory's Chita dstillery. Over five different types of casks were used most significantly used American oak, Sherry casks and ultra rare Mizunara Japanese casks. Notes include clementine, raw honey, white peach, delicate oak spices, sowed grains, and more.",
        imageURL: "http://www.astorwines.com/images/items/33284_hr.jpg",
        quantity: 100
      },
      {
        name: 'Nikka Coffey Grain Japanese Whisky',
        price: 64.99,
        description: "Coffey Grain is a rare, single grain whisky based on corn created by the masters at Nikka primarily as a base for their blends. The Coffey refers to the column stills used to distill the spirit and the result is a light spirit with round forward notes of pure vanilla, and hints of tropical fruit with just a faint presence of spice.",
        imageURL: "http://www.astorwines.com/images/items/30126_hr.jpg",
        quantity: 100
      },
      {
        name: 'Iwai Tradition Japanese Whiskey',
        price: 69.99,
        description: "This is malt driven spirit is truly a reflection of contemporary Japanese whisky. Incredibly balanced, soft and layered. A blending of sherry, bourbon and wine casks with hints delicate hints of peat make for a harmonious whisky that would make Iwai-san proud. Ripe Cherry, honey toffee with a beautiful ginger spice.",
        imageURL: "https://static1.squarespace.com/static/53750d9ce4b09a4c0922a0bb/t/559d8f96e4b0c7eb365a0d5e/1436389285950/?format=500w",
        quantity: 100
      },
      {
        name: 'Usagi Heavyweight Cobbler Shaker',
        price: 44.99,
        description: "Made to an exacting standard for easy separation after shaking. 18/8 stainless steel with a matte finish. 1 drink capacity at 500ml (17oz) ",
        imageURL: "https://www.cocktailkingdomcanada.com/media/catalog/product/cache/20/image/650x/040ec09b1e35df139433887a97daa66f/s/h/sha_usagi500xh_0000_stl_web1_1.jpg?___store=ca_en&UseLoc=CA",
        quantity: 100
      },
      {
        name: 'Leopold Jigger 1oz, 2oz',
        price: 24.99,
        description: "Original design inspired by vintage jiggers of the 1930s. Gunmetal black over stainless steel with banded design. NOT DISHWASHER SAFE",
        imageURL: "https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/j/i/jig_leopoldstp_3060_blk.jpg",
        quantity: 100
      },
      {
        name: 'Japanese Style Jigger 1oz, 2oz',
        price: 18.99,
        description: "Gunmetal black over 18-8 stainless steel. NOT DISHWASHER SAFE",
        imageURL: "https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/j/i/jig_japanese_01oz1.5_blk-copxrng.jpg",
        quantity: 100
      },
      {
        name: 'Gaz Regan Finger Stirrer',
        price: 26.99,
        description: "Developed in collaboration with Gary Regan, a life-sized cast of his own finger inspired by his legendary stirring technique",
        imageURL: "https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/g/a/gaz_bsp-fngrstir_0035_stl_web1_v1.jpg",
        quantity: 100
      },
      {
        name: 'Skull Barspoon',
        price: 31.99,
        description: "Smooth coil spoon with a skull top",
        imageURL: "https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/b/s/bsp_skullxxx_0033_gld_web1c.jpg",
        quantity: 100
      },
      {
        name: 'Asanoha Mixing Glass',
        price: 39.99,
        description: "Seamless interior for quieter stirring. Dishwasher safe.",
        imageURL: "https://www.cocktailkingdom.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/x/mxg_asanohamxg_0000_000_web1.jpg",
        quantity: 100
      }
    ])
  })
  .then(() => {
    console.log('Seeding successful');
    db.close();
    return null;
  });




