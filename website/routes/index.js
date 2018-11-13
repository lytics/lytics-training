var gtmid = 'GTM-K97KTQB';
var express = require('express');
var router = express.Router();

var productsNew = [{
  title: 'New Product',
  teaser: 'The Twist of Healthy Yogurt',
  text: 'This is a sample website used to test, demonstrate and learn about the Lytics platform. This is not a real brand and none of these products are real.',
  image: {
    src: '/images/yogurt.jpg',
    alt: ''
  },
  url: '/menu'
}];
var blogCups = {
  title: 'No Cook Yogurt Cups',
  teaser: {
    text: 'The no-cook, prep-ahead recipe makes the morning routine a breeze with its winning combination of protein, calcium, fiber, and Omega-3s. And it tastes great!',
    image: {
      src: '/images/frozen-yogurt-cups-circle.png',
      alt: '',
    }
  },
  text: `<p>Overnight oats have a lot going for them.</p>
  <p>The no-cook, prep-ahead recipe makes the morning routine a breeze with its winning combination of protein, calcium, fiber, and Omega-3s. And it tastes great!</p>
  <p>In fact, I enjoy this easy breakfast-in-a jar so much that I’ve created many seasonal versions. The following recipe is my original, however, and I find myself returning to it every fall.</p>
  <p>Fresh berries and juicy peaches are a mainstay of our summer breakfasts, and I’m always a little sad when their season comes to an end. But frozen fruit can ease the transition, and it works surprisingly well in these grab-and-go cups.</p>
  <p>Because they maintain their plump sweetness, frozen blueberries are my favorite. Unlike their perishable counterparts, the quality of frozen blueberries is consistently good, as they’re frozen at the peak of ripeness. You can keep a stash of them on hand and transfer the berries directly to the oat cups. No thawing, washing, or chopping is needed.</p>
  <p>Now, I know what some of you may be thinking. Uncooked oats? Eat them cold? And you’re right. It sounds strange—until you try.</p>
  <p>Think of this as a cold, fruity porridge–refreshing and filling at the same time.  After an overnight soak, the oats become creamy. I like the texture to be fairly thick with the slightest bit of soupiness.  The first time around, I suggest following the recipe. Then, if you prefer your oatmeal cup a bit thicker or thinner, simply add or subtract a tablespoon of milk or a teaspoon or two of oats until you have the perfect consistency for you.</p>
  <p>The recipe is quite flexible, so feel free to experiment further. For example, almond extract is a nice option to the vanilla. It delivers a bigger flavor punch, so when using, you may wish to start with just 1/4 teaspoon. With regard to sweetness, I like two teaspoons of pure maple syrup, but feel free to adjust to your taste buds.  If you like a little crunch, toss in some toasted nuts or granola before digging in. Chopped banana is another welcome addition. Reheating is an option but not necessary (I never do).</p>
  <p>However you mix your personal-size oatmeal cup, I am willing to bet that if you eat one for a few days in a row and find the combination that suits you best, you will find yourself looking forward to these–maybe even craving them.  I’m always happy to quickly mix a few jars in the evening and have breakfast ready and waiting!</p>`,
  image: {
    src: '/images/frozen-yogurt-cups.jpg',
    alt: ''
  },
  author: 'Admin',
  date: 'June 1, 2018',
  url: '/blog/no-cook-yogurt-cups'
};
var blogBites = {
  title: 'Frozen Yogurt Bites',
  teaser: {
    title: 'Yogurt Bites',
    text: 'Nothing beats a good frozen treat in the summer, except maybe a guilt free frozen treat!',
    image: {
      src: '/images/frozen-yogurt-bites-circle.png',
      alt: '',
    }
  },
  text: `<p>Nothing beats a good frozen treat in the summer, except maybe a guilt free frozen treat! These Frozen Yogurt Bites are delicious and will definitely keep you feeling cool and refreshed during these hot June days. No need to feel guilty though, these are made with Greek yogurt and fresh fruit making them a much healthier alternative to other frozen treats!</p>
  <p>1. Line muffin tins with cupcake liners.</p>
  <p>2. Using a food processor, or rolling pin, crush granola.</p>
  <p>3. In a bowl, combine crushed granola and coconut oil until evenly coated.</p>
  <p>4. Spoon granola into cupcake liners, spreading it out to form a crust on the bottom of each liner.</p>
  <p>5. Spoon 2 Tablespoons yogurt into each cupcake liner. Spread gently so you don't mix the granola into the yogurt.</p>
  <p>6. Top with your favorite berries.</p>
  <p>7. Freeze 4-6 hours, or overnight.</p>
  <p>8. Thaw for 10 minutes before serving, and enjoy!</p>`,
  image: {
    src: '/images/frozen-yogurt-bites.jpg',
    alt: ''
  },
  author: 'Admin',
  date: 'June 1, 2018',
  url: '/blog/frozen-yogurt-bites'
};
var blogHealth = {
  title: '5-Minute Healthy Greek Frozen Yogurt',
  teaser: {
    text: 'Now that is my kind of math! Aside from the quick and easy nature of this recipe, the real cherry on top of the cake sundae is that this is healthy frozen yogurt. So we are talking a dessert that takes minutes to make, is totally customizable in flavor and is so good for that bikini body that you’ll be kicking the store-bought froyo permanently to the curb.',
    image: {
      src: '/images/healthy-froyo-circle.png',
      alt: '',
    }
  },
  text: `<p>5 minutes + 4 ingredients = homemade Greek frozen yogurt.</p>
  <p>Now that is my kind of math! Aside from the quick and easy nature of this recipe, the real cherry on top of the cake sundae is that this is healthy frozen yogurt. So we are talking a dessert that takes minutes to make, is totally customizable in flavor and is so good for that bikini body that you’ll be kicking the store-bought froyo permanently to the curb. See ya!</p>
  <p>There are a few important tips for transforming frozen fruit into fabulously healthy Greek frozen yogurt:</p>
  <p>You can use any type of frozen fruit in this recipe.</p>
  <p>You can use any flavor and percentage of fat yogurt (Greek or regular).</p>
  <p>You can add more or less honey based on the sweetness of the fruit and your own taste preferences.</p>
  <p>You can add in peanut butter, Nutella, chocolate chips, nuts or any other mix-in involved in your frozen yogurt fantasies.</p>
  <p>Ready to satisfy that sweet tooth without an ounce of guilt? Read on for the ultimate guide to whipping up 5-Minute Healthy Greek Frozen Yogurt, no ice cream machine required!</p>`,
  image: {
    src: '/images/healthy-froyo.jpg',
    alt: ''
  },
  author: 'Admin',
  date: 'June 7, 2018',
  url: '/blog/healthy-froyo'
};
var productKiwi = {
  title: 'Kiwi',
  text: `<p>Kiwifruit (often abbreviated as kiwi), or Chinese gooseberry, is the edible berry of several species of woody vines in the genus Actinidia. The most common cultivar group of kiwifruit ('Hayward') is oval, about the size of a large hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture with a sweet and unique flavour. China produced 56% of the world total of kiwifruit in 2016.</p>
  <p>Kiwifruit may be eaten raw, made into juices, used in baked goods, prepared with meat or used as a garnish. The whole fruit, including the skin, is suitable for human consumption; however, the skin is often discarded due to its texture. Sliced kiwifruit has long been used as a garnish atop whipped cream on pavlova, a meringue-based dessert. Traditionally in China, kiwifruit was not eaten for pleasure, but was given as medicine to children to help them grow and to women who have given birth to help them recover.</p>
  <p>In a 100-gram amount, green kiwifruit provides 61 calories, is 83% water and 15% carbohydrates, with negligible protein and fat (table). It is particularly rich (20% or more of the Daily Value, DV) in vitamin C (112% DV) and vitamin K (38% DV), has a moderate content of vitamin E (10% DV), with no other micronutrients in significant content. Gold kiwifruit has similar nutritional value, although only vitamin C has high content in a 100 gram amount (194% DV, table).</p>`,
  image: {
    src: '/images/kiwi.jpg',
    alt: ''
  },
  url: '/menu/kiwi'
};

var productMango = {
  title: 'Mango',
  text: `<p>Mangoes are juicy stone fruit (drupe) from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.</p>
  <p>The majority of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae. Mangoes are native to South Asia, from where the "common mango" or "Indian mango", Mangifera indica, has been distributed worldwide to become one of the most widely cultivated fruits in the tropics. Other Mangifera species (e.g. horse mango, Mangifera foetida) are grown on a more localized basis.</p>
  <p>Mangoes are generally sweet, although the taste and texture of the flesh varies across cultivars; some have a soft, pulpy texture similar to an overripe plum, while others are firmer, like a cantaloupe or avocado, and some may have a fibrous texture. The skin of unripe, pickled, or cooked mango can be consumed, but has the potential to cause contact dermatitis of the lips, gingiva, or tongue in susceptible people.</p>
  <p>Pieces of mango can be mashed and used as a topping on ice cream or blended with milk and ice as milkshakes. Sweet glutinous rice is flavored with coconut, then served with sliced mango as a dessert. In other parts of Southeast Asia, mangoes are pickled with fish sauce and rice vinegar. Green mangoes can be used in mango salad with fish sauce and dried shrimp. Mango with condensed milk may be used as a topping for shaved ice.</p>`,
  image: {
    src: '/images/mango.jpg',
    alt: ''
  },
  url: '/menu/mango'
};

var productCantaloupe = {
  title: 'Cantaloupe',
  text: `<p>Cantaloupes range in weight from 0.5 to 5 kilograms (1 to 11 lb). Originally, cantaloupe referred only to the non-netted, orange-fleshed melons of Europe, but may mean any orange-fleshed melon of C. melo. China is the world's largest producer of cantaloupes, providing half of the global total in 2016.</p>
  <p>Raw cantaloupe is 90% water, 8% carbohydrates, 0.8% protein and 0.2% fat, providing 140 kJ (34 kcal) and 2020 μg of the provitamin A orange carotenoid, beta-carotene per 100 grams. Fresh cantaloupe is a rich source (20% or more of the Daily Value or DV) of vitamin C (44% DV) and vitamin A (21% DV), with other nutrients in negligible amounts (less than 10% DV).</p>
  <p>Cantaloupe is normally eaten as a fresh fruit, as a salad, or as a dessert with ice cream or custard. Melon pieces wrapped in prosciutto are a familiar antipasto. The seeds are edible and may be dried for use as a snack.</p>
<p>Because the surface of a cantaloupe can contain harmful bacteria—in particular, Salmonella—it is recommended to wash and scrub a melon thoroughly before cutting and consumption. The fruit should be refrigerated after cutting it and consumed in less than three days to prevent risk of Salmonella or other bacterial pathogens.</p>
<p>A moldy cantaloupe in a Peoria, Illinois market in 1943 was found to contain the highest yielding strain of mold for penicillin production, after a worldwide search.</p>`,
  image: {
    src: '/images/cantaloupe.jpg',
    alt: ''
  },
  url: '/menu/cantaloupe'
};

var productBlackberry = {
  title: 'Blackberry',
  text: `<p>What distinguishes the blackberry from its raspberry relatives is whether or not the torus (receptacle or stem) "picks with" (i.e., stays with) the fruit. When one picks a blackberry fruit, the torus does stay with the fruit. With a raspberry, the torus remains on the plant, leaving a hollow core in the raspberry fruit.</p>
<p>The term bramble, a word meaning any impenetrable thicket, has traditionally been applied specifically to the blackberry or its products, though in the United States it applies to all members of the genus Rubus. In the western US, the term caneberry is used to refer to blackberries and raspberries as a group rather than the term bramble.</p>
<p>Cultivated blackberries are notable for their significant contents of dietary fiber, vitamin C, and vitamin K (table). A 100 gram serving of raw blackberries supplies 43 calories and 5 grams of dietary fiber or 25% of the recommended Daily Value (DV) (table). In 100 grams, vitamin C and vitamin K contents are 25% and 19% DV, respectively, while other essential nutrients are low in content.</p>
<p>Blackberries contain both soluble and insoluble fiber components.</p>`,
  image: {
    src: '/images/blackberry.jpg',
    alt: ''
  },
  url: '/menu/blackberry'
};

var productStrawberry = {
  title: 'Strawberry',
  text: `<p>The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.</p>
  <p>One serving (100 g) of strawberries contains approximately 33 kilocalories, is an excellent source of vitamin C, a good source of manganese, and provides several other vitamins and dietary minerals in lesser amounts.</p>
<p>Strawberries contain a modest amount of essential unsaturated fatty acids in the achene (seed) oil.</p>
<p>In addition to being consumed fresh, strawberries can be frozen, made into preserves, as well as dried and used in prepared foods, such as cereal bars. Strawberries and strawberry flavorings are a popular addition to dairy products, such as strawberry-flavored milk, strawberry ice cream, strawberry milkshakes, strawberry smoothies and strawberry yogurts.</p>`,
  image: {
    src: '/images/strawberry.jpg',
    alt: ''
  },
  url: '/menu/strawberry'
};

var productBlueberry = {
  title: 'Blueberry',
  text: `<p>Blueberries are perennial flowering plants with blue– or purple–colored berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, and huckleberries. Commercial "blueberries" – including both wild ('lowbush') and cultivated ('highbush') blueberries – are native to North America. The highbush blueberry varieties were introduced into Europe during the 1930s.</p>
  <p>Blueberries are sold fresh or are processed as individually quick frozen (IQF) fruit, purée, juice, or dried or infused berries. These may then be used in a variety of consumer goods, such as jellies, jams, blueberry pies, muffins, snack foods, or as an additive to breakfast cereals.</p>
  <p>Blueberry jam is made from blueberries, sugar, water, and fruit pectin. Blueberry sauce is a sweet sauce prepared using blueberries as a primary ingredient.</p>
  <p>Blueberry wine is made from the flesh and skin of the berry, which is fermented and then matured; usually the lowbush variety is used.</p>
  <p>Blueberries consist of 14% carbohydrates, 0.7% protein, 0.3% fat and 84% water. They contain only negligible amounts of micronutrients, with moderate levels (relative to respective Daily Values) (DV) of the essential dietary mineral manganese, vitamin C, vitamin K and dietary fiber. Generally, nutrient contents of blueberries are a low percentage of the DV. One serving provides a relatively low caloric value of 57 kcal per 100 g serving and glycemic load score of 6 out of 100 per day.</p>`,
  image: {
    src: '/images/blueberry.jpg',
    alt: ''
  },
  url: '/menu/blueberry'
};

var productGrapes = {
  title: 'Grapes',
  text: `<p>A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.</p>
<p>Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.</p>
<p>Seedless cultivars now make up the overwhelming majority of table grape plantings. Because grapevines are vegetatively propagated by cuttings, the lack of seeds does not present a problem for reproduction. It is an issue for breeders, who must either use a seeded variety as the female parent or rescue embryos early in development using tissue culture techniques.</p>
<p>There are several sources of the seedlessness trait, and essentially all commercial cultivators get it from one of three sources: Thompson Seedless, Russian Seedless, and Black Monukka, all being cultivars of Vitis vinifera. There are currently more than a dozen varieties of seedless grapes. Several, such as Einset Seedless, Benjamin Gunnels's Prime seedless grapes, Reliance, and Venus, have been specifically cultivated for hardiness and quality in the relatively cold climates of northeastern United States and southern Ontario.</p>
<p>Grape juice is obtained from crushing and blending grapes into a liquid. The juice is often sold in stores or fermented and made into wine, brandy, or vinegar. Grape juice that has been pasteurized, removing any naturally occurring yeast, will not ferment if kept sterile, and thus contains no alcohol. In the wine industry, grape juice that contains 7–23% of pulp, skins, stems and seeds is often referred to as "must". In North America, the most common grape juice is purple and made from Concord grapes, while white grape juice is commonly made from Niagara grapes, both of which are varieties of native American grapes, a different species from European wine grapes. In California, Sultana (known there as Thompson Seedless) grapes are sometimes diverted from the raisin or table market to produce white juice.</p>`,
  image: {
    src: '/images/grapes.jpg',
    alt: ''
  },
  url: '/menu/grapes'
};

var productApple = {
  title: 'Green Apple',
  text: `<p>An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions</p>
  <p>A typical apple serving weighs 242 grams and provides 126 calories with a moderate content of dietary fiber. Otherwise, there is generally low content of essential nutrients</p>
  <p>All parts of the fruit, including the skin, except for the seeds, are suitable for human consumption. The core, from stem to bottom, containing the seeds, is usually not eaten and is discarded.</p>
<p>Apples can be consumed various ways: juice, raw in salads, baked in pies, cooked into sauces and spreads like apple butter, and other baked dishes.</p>
<p>Several techniques are used to preserve apples and apple products. Apples can be canned, dried or frozen. Canned or frozen apples are eventually baked into pies or other cooked dishes. Apple juice or cider is also bottled. Apple juice is often concentrated and frozen.</p>`,
  image: {
    src: '/images/green-apple.jpg',
    alt: ''
  },
  url: '/menu/apple'
};

var productPineapple = {
  title: 'Pineapple',
  text: `<p>The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the family Bromeliaceae.</p>
  <p>The flesh and juice of the pineapple are used in cuisines around the world. In many tropical countries, pineapple is prepared and sold on roadsides as a snack. It is sold whole or in halves with a stick inserted. Whole, cored slices with a cherry in the middle are a common garnish on hams in the West. Chunks of pineapple are used in desserts such as fruit salad, as well as in some savory dishes, including pizza toppings, or as a grilled ring on a hamburger. Crushed pineapple is used in yogurt, jam, sweets, and ice cream. The juice of the pineapple is served as a beverage, and it is also the main ingredient in cocktails such as the piña colada and in the drink tepache.</p>
  <p>In a 100-gram reference amount, raw pineapple is a rich source of manganese (44% Daily Value, DV) and vitamin C (58% DV), but otherwise contains no essential nutrients in significant quantities.</p>`,
  image: {
    src: '/images/pineapple.jpg',
    alt: ''
  },
  url: '/menu/pineapple'
};

var categories = [{
  name: 'All Time Classic',
  description: 'Just the basics. Classic flavors you\'ve grown up with.',
  products: [{
    name: 'Kiwi',
    url: productKiwi.url,
    image: {
      src: productKiwi.image.src,
      alt: ''
    }
  },
  {
    name: 'Mango',
    url: productMango.url,
    image: {
      src: productMango.image.src,
      alt: ''
    }
  },
  {
    name: 'Cantaloupe',
    url: productCantaloupe.url,
    image: {
      src: productCantaloupe.image.src,
      alt: ''
    }
  }]
},
{
  name: 'Berry Special',
  description: 'Jazz things up by adding fresh berries to the mix!',
  products: [{
    name: 'Blackberry',
    url: productBlackberry.url,
    image: {
      src: productBlackberry.image.src,
      alt: ''
    }
  },
  {
    name: 'Strawberry',
    url: productStrawberry.url,
    image: {
      src: productStrawberry.image.src,
      alt: ''
    }
  },
  {
    name: 'Blueberry',
    url: productBlueberry.url,
    image: {
      src: productBlueberry.image.src,
      alt: ''
    }
  }]
},
{
  name: 'Fruit Blast',
  description: 'When a few berries are not enough go all in with a base built on all types of fresh fruit.',
  products: [{
    name: 'Grapes',
    url: productGrapes.url,
    image: {
      src: productGrapes.image.src,
      alt: ''
    }
  },
  {
    name: 'Green Apple',
    url: productApple.url,
    image: {
      src: productApple.image.src,
      alt: ''
    }
  },
  {
    name: 'Pineapple',
    url: productPineapple.url,
    image: {
      src: productPineapple.image.src,
      alt: ''
    }
  }]
}
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    section: '/',
    gtmid: gtmid,
    title: 'Home',
    products: productsNew
  });
});

/* GET blog page. */
router.get('/blog', function (req, res, next) {
  res.render('blog', {
    section: '/blog',
    gtmid: gtmid,
    title: 'Blog',
    featured: [blogCups, blogHealth],
    recent: [blogBites]
  });
});

/* GET blog post. */
router.get('/blog/no-cook-yogurt-cups', function (req, res, next) {
  res.render('post', {
    section: '/blog',
    gtmid: gtmid,
    title: `Blog: ${blogCups.title}`,
    post: blogCups,
    recent: [blogBites]
  });
});

/* GET blog post. */
router.get('/blog/frozen-yogurt-bites', function (req, res, next) {
  res.render('post', {
    section: '/blog',
    gtmid: gtmid,
    title: `Blog: ${blogBites.title}`,
    post: blogBites,
    recent: [blogCups]
  });
});

/* GET blog post. */
router.get('/blog/healthy-froyo', function (req, res, next) {
  res.render('post', {
    section: '/blog',
    gtmid: gtmid,
    title: `Blog: ${blogHealth.title}`,
    post: blogHealth,
    recent: [blogBites]
  });
});

/* GET menu page. */
router.get('/menu', function (req, res, next) {
  res.render('menu', {
    section: '/menu',
    gtmid: gtmid,
    title: `Menu`,
    categories: categories
  });
});

/* GET product page. */
router.get('/menu/kiwi', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productKiwi.title,
    post: productKiwi,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/mango', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productMango.title,
    post: productMango,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/cantaloupe', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productCantaloupe.title,
    post: productCantaloupe,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/blackberry', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productBlackberry.title,
    post: productBlackberry,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/strawberry', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productStrawberry.title,
    post: productStrawberry,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/blueberry', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productBlueberry.title,
    post: productBlueberry,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/grapes', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productGrapes.title,
    post: productGrapes,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/apple', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productApple.title,
    post: productApple,
    recent: [blogBites]
  });
});
/* GET product page. */
router.get('/menu/pineapple', function (req, res, next) {
  res.render('product', {
    section: '/menu',
    gtmid: gtmid,
    title: productPineapple.title,
    post: productPineapple,
    recent: [blogBites]
  });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    section: '/contact',
    gtmid: gtmid,
    title: `Contact`,
    text: 'If you\'re having problems editing this website template, then don\'t hesitate to ask for help on the Forums.',
    address: 'Unit 0123 , ABC Building, Business Park',
    image: {
      src: '/images/check-in.png',
      alt: ''
    }
  });
});

module.exports = router;
