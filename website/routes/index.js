var gtmid = '!!! YOUR GTM ACCOUNT ID HERE !!!';
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
  <p>In a 100-gram amount, green kiwifruit provides 61 calories, is 83% water and 15% carbohydrates, with negligible protein and fat (table). It is particularly rich (20% or more of the Daily Value, DV) in vitamin C (112% DV) and vitamin K (38% DV), has a moderate content of vitamin E (10% DV), with no other micronutrients in significant content. Gold kiwifruit has similar nutritional value, although only vitamin C has high content in a 100 gram amount (194% DV, table).</p>
  <p>Here are some handy tips to incorporate more kiwifruit into your diet:</p>
  <p>Cut a ripe kiwi in half, leaving the skin on, and eat each half with a spoon, using the skin as its own natural bowl.</p>
  <p>Make your own fresh tropical fruit cocktail and include kiwis, pineapple, mango, and strawberries.</p>
  <p>Drizzle a small amount of honey on top of the fruit mixture for an extra sweet treat.</p>
  <p>Make a green smoothie or juice with kiwi, spinach, apple, and pears.</p>
  <p>Freeze slices of kiwi and eat them as a snack or dessert on a hot day.</p>
  <p>Dice up kiwi and use as a summer salad topper over a bed of spinach, walnuts, dried cranberries, diced apple, feta cheese, and a light vinaigrette dressing.</p>`,
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
  <p>Pieces of mango can be mashed and used as a topping on ice cream or blended with milk and ice as milkshakes. Sweet glutinous rice is flavored with coconut, then served with sliced mango as a dessert. In other parts of Southeast Asia, mangoes are pickled with fish sauce and rice vinegar. Green mangoes can be used in mango salad with fish sauce and dried shrimp. Mango with condensed milk may be used as a topping for shaved ice.</p>
  <p>Mangos orginated in Southeast Asia and India, where references to the fruit are documented in Hindu writings dating back to 4000 B.C. Buddhist monks cultivated the fruit and in fact, the mango is considered to be a sacred fruit in the region because is is said that Buddha himself meditated under a mango tree. The mango belongs to the same family as the cashew and pistachio nut.</p>
  <p>Mango seeds traveled with humans from Asia to the Middle East, East Africa and South America beginning around 300 or 400 A.D. Mangos sold in the U.S. are grown near the equator in countries like. Mexico, Ecuador, Peru, Brazil, Guatemala and Haiti.</p>
  <p>Mangos have been grown in the U.S. for a little more than a century, but commercial, large-scale production here is limited.</p>
  <p>Because mangos need a tropical climate to flourish only Florida, California, Hawaii, and Puerto Rico grow mangos. The United States Territory of Puerto Rico has been producing mangos commercially for the last 30 years. Currently about 4,000 acres of mangos are being cultivated for export, but the majority of this crop goes to Europe rather than the mainland United States.</p>
  <p>In the Coachella Valley of California, around 200 acres of mangos are being produced, with about half of these being certified organic. Slow, gradual growth in mango acreage is expected in California, where the competition for suitable land is fierce. Mangos are susceptible to frost, and farmers who own appropriate land are hesitant to switch from tried and true crops such as grapes and citrus. In Hawaii, the estimated space devoted to mangos is around 300 acres and nearly all of this fruit will be sold locally.</p>
  <p>Many mango varieties have been cultivated in South Florida, as part of a seedling program initiated by the United States Department of Agriculture (USDA) and spearheaded by David Fairchild, founder of USDA’s Section of Foreign Seed and Plant Introduction. The program focused on introducing mango varieties to the region, with the goal of producing mangos that could be exported.</p>
  <p>Over time, new varieties were developed, and some of these were introduced to growers in other parts of the world. Today, many of the popular varieties of mango grown around the world were derived from this program in Florida, including the Tommy Atkins, Haden, Keitt, and Kent. In fact, the Haden was a seedling of the Mulgoba, a seedling brought to Florida by the USDA from India during the late 1800s.</p>
  <p>While the mango industry in Florida thrived for some time after the mango’s introduction, its commercial acreage peeked at 7,000 acres in the early 1900s. The mango industry in Florida has since been diminished by freezes, urbanization, hurricanes and competition from other countries. Today, it’s estimated that less than 1000 acres of mangos are still in production, and most of these mangos are destined for local farmers’ and specialty markets. Meanwhile, backyard trees in Florida continue to thrive and bring joy to residents across the southern part of the state.</p>`,
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
  <p>Cantaloupes are a powerhouse of nutrients.  They are an excellent source of vitamins A and C.  However, they also contain beta carotenes, potassium, B-complex vitamins and manganese.  Moreover, they are very low in calories and practically devoid of fat.</p>
  <p>Cantaloupes are best enjoyed as is.  But there are many other culinary possibilities.  They are ideal for fruit salads.  Cantaloupe can also be incorporated into jams and sorbets or served with ice cream.  And of course, there is the iconic Italian appetizer of fresh melon and prosciutto.</p>
  <p>Cantaloupe is eaten fresh almost exclusively. Cantaloupes are also consumed in ice cream desserts. A familiar form of modern antipasto is created by wrapping prosciutto in pieces of melons. This fruit is often consumed as a main course or as a dessert because of its sweet smelling and sugary interior. If not ripe when plucked, cantaloupes can be left in a warm room that is cool and dry until it ripens.</p>
  <p>Cantaloupes are often used in fruit salads, pureed and added to soups, sliced, and served in yogurt or eaten raw with lemon juice and honey. The juice is sometimes mixed with water to make a variety of quite refreshing summer drinks.</p>
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
<p>Blackberries contain both soluble and insoluble fiber components.</p>
<p>Wildlife animals and birds eat blackberries as food or receive a thorny protective cover from blackberry bushes or vines that wind along fences, animals such as quail, doves, turkey, raccoons, opossums, and believe it or not, bears. Perhaps children enjoy eating a fistful of blackberries from wild plants growing at the edge of the woods in summer, and then return home with the tell-tale purple stains on their teeth, lips, and clothing. Wild blackberries are delicious when they grow in profusion at the wood’s edge into bushy plants or as trailing vines called dewberries. The delicate balance of a sweet and sour taste can stimulate the senses from the new hybrid cultivars towards heights unequaled by other berries or fruits.</p>
<p>Blackberries fresh from the vines are useful in many foods; they are delicious in frozen packs, canned, as blackberry wine, ice cream, fresh blackberry juice, blackberry pies, blackberry jelly, blackberry jam, and best of all when eaten as a fresh fruit. Many health benefits come from eating blackberries that are rich in anti-oxidants and vitamins along with being a good source of the minerals potassium, phosphorus, iron, and calcium.</p>`,
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
<p>In addition to being consumed fresh, strawberries can be frozen, made into preserves, as well as dried and used in prepared foods, such as cereal bars. Strawberries and strawberry flavorings are a popular addition to dairy products, such as strawberry-flavored milk, strawberry ice cream, strawberry milkshakes, strawberry smoothies and strawberry yogurts.</p>
<p>Strawberry shortcake is a widely known dessert made with shortcake. Sliced strawberries are mixed with sugar and allowed to sit an hour or so, until the strawberries have surrendered a great deal of their juices (macerated). The shortcakes are split and the bottoms are covered with a layer of strawberries, juice, and whipped cream, typically flavored with sugar and vanilla. The top is replaced, and more strawberries and whipped cream are added onto the top. Some convenience versions of shortcake are not made with a shortcake (i.e. biscuit) at all, but instead use a base of sponge cake or sometimes a corn muffin. Japanese-style strawberry shortcakes use a sponge cake base, and are a popular Christmas treat in Japan.</p>
<p>The largest strawberry shortcake ever made was in the town of La Trinidad, Benguet in the Philippines on March 20, 2004. It weighed 21,213.40 lb (9622.23 kg.)</p>
<p>Though strawberry is the most widely known shortcake dessert, peach shortcake, blueberry shortcake, chocolate shortcake and other similar desserts are made along similar lines. It is also common to see recipes where the shortcake itself is flavored; coconut is a common addition.</p>
<p>History of strawberry shortcake dessert
Though today's shortcakes are usually of the biscuit or sponge-cake variety, earlier American recipes called for pie crust in rounds or broken-up pieces, which was a variety still being enjoyed in the 21st century, particularly in the South.</p>
<p>The first strawberry shortcake recipe appeared in an English cookbook as early as 1588, according to Driscoll's berry growers. By 1850, strawberry shortcake was a well-known biscuit and fruit dessert served hot with butter and sweetened cream. In the United States, strawberry shortcake parties were held as celebrations of the summer fruit harvest. This tradition is upheld in some parts of the United States on June 14, which is Strawberry Shortcake Day. It wasn't until 1910 that French pastry chefs replaced the topping with heavy whipped cream.</p>`,
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
  <p>Blueberries consist of 14% carbohydrates, 0.7% protein, 0.3% fat and 84% water. They contain only negligible amounts of micronutrients, with moderate levels (relative to respective Daily Values) (DV) of the essential dietary mineral manganese, vitamin C, vitamin K and dietary fiber. Generally, nutrient contents of blueberries are a low percentage of the DV. One serving provides a relatively low caloric value of 57 kcal per 100 g serving and glycemic load score of 6 out of 100 per day.</p>
  <p>Blueberries are one of the few fruit species native to North America and have a colorful history dating back to pre-colonial times. The blueberry is in the genus Vaccinium and is closely related to the azalea, cranberry and rhododendron. Species in the blueberry family are known by many names, including cowberry, bilberry, farkleberry and sparkleberry. Blueberries are also mistakenly referred to as huckleberries, which are actually a different genus (Gaylussacia).</p>
  <p>The blueberry was gathered and used by Native Americans for centuries before colonists arrived from Europe. The blueberry was sacred to the Indians in part because the blossom-end of the berry is shaped like a five-pointed star. The Indians believed that the berries were sent by the Great Spirit during a great famine to relieve the hunger of their children.</p>
  <p>The Native Americans ate blueberries fresh and dried them to preserve them for use in winter. The berries were mixed with meat to make pemmican, and mixed with cornmeal, honey and water to make a pudding called “sautauthig”. The juice of the fruit was used to make cough syrup while the leaves were made into a tea meant to fortify the blood. The juice was also used as a dye for cloth and baskets. Dried berries were used in soups and stews and used as a rub for meat.</p>
  <p>When English settlers arrived in America, they tried to implement English farming practices in America. Coupled with an attempt at communal living, this proved disastrous. The New England settlers nearly starved to death until the Indians taught them about native plants. In addition to teaching the settlers about growing corn, the Wampanoag Indians taught English settlers of Plymouth how to gather and dry blueberries to keep them through the winter.</p>
  <p>The blueberries used by the Indians were the wild, or low bush variety. Most blueberries that are cultivated today are the high bush variety that was domesticated in the early 20th century by Elizabeth White and Dr. Frederick Coville. The plants have been improved over the years to increase the size, color and yield of the berry. Even thought the wild berries are smaller, they are more flavorful than their cultivated cousins. Cultivation has been so successful that America now grows over 90% of the blueberries in the world.</p>
  <p>What the Indians knew years ago has recently been rediscovered: blueberries are very good for your health. During the Civil War soldiers drank a blueberry beverage that was supposed to improve their health. Now recent studies showing the health benefits of eating blueberries have driven blueberry consumption even higher.</p>
  <p>Blueberries are easily preserved by freezing, canning and drying. They can also be juiced or made into jam or preserves. The surge in the popularity of blueberries has caused home gardeners to plant these shrubs in nearly every growing area of America.</p>`,
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
<p>Grape juice is obtained from crushing and blending grapes into a liquid. The juice is often sold in stores or fermented and made into wine, brandy, or vinegar. Grape juice that has been pasteurized, removing any naturally occurring yeast, will not ferment if kept sterile, and thus contains no alcohol. In the wine industry, grape juice that contains 7–23% of pulp, skins, stems and seeds is often referred to as "must". In North America, the most common grape juice is purple and made from Concord grapes, while white grape juice is commonly made from Niagara grapes, both of which are varieties of native American grapes, a different species from European wine grapes. In California, Sultana (known there as Thompson Seedless) grapes are sometimes diverted from the raisin or table market to produce white juice.</p>
<p>Today, over 99 percent of grapes commercially grown in the United States come from California. With over 85 varieties grown, California grapes come in three colors – green, red and black – and are available May through January. During the 2017 season, California table grape growers harvested over 109 million boxes of grapes, sending them to more than 55 countries around the world, at a crop value of $1.81 billion.</p>
<p>California table grapes are grown in two distinct areas: Coachella Valley and San Joaquin Valley. These valleys offer the optimal growing conditions for grapes of the highest quality.</p>
<p>Grapes can be eaten fresh or frozen and are a wonderful addition of flavor and texture to anything from salads to sides, drinks to desserts. Whether sautéed, roasted, grilled or even pickled, grapes make it easy for anyone to take their snacks and meals to the next level.</p>`,
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
<p>Several techniques are used to preserve apples and apple products. Apples can be canned, dried or frozen. Canned or frozen apples are eventually baked into pies or other cooked dishes. Apple juice or cider is also bottled. Apple juice is often concentrated and frozen.</p>
<p>Apple crisp is a relatively modern dish. It is notably absent from the first edition of the Fannie Farmer Cookbook (1896), which is a comprehensive collection of American recipes.</p>
<p>The earliest reference to apple crisp in print occurs in 1924, with a recipe in the Everybody's Cook Book: A Comprehensive Manual of Home Cookery, Isabel Ely Lord [Harcout Brace and Company: New York] 1924 (p. 239). In 1924, apple crisp also makes an appearance in a newspaper article in the Appleton Post Crescent on Tuesday, December 9, 1924 (Appleton, Wisconsin). Despite its relatively recent invention, apple crisp or crumble has become an American and British tradition especially during the autumn, when apples are plentiful. The dish is also very popular in Canada, especially in areas where berries and fruit are readily available.</p>
<p>Variations of this dish are much older. For example, a recipe for apple pandowdy is in Miss Corson's Practical American Cookery, 1886.</p>
<p>Apple pie was brought to the colonies by the British, Dutch, and Swedes during the 17th and 18th centuries. The apple pie had to wait for the planting of European varieties, brought across the Atlantic, to become fruit-bearing apple trees, to be selected for their cooking qualities as there were no native apples except crabapples, which yield very small and sour fruit. In the meantime, the colonists were more likely to make their pies, or "pasties", from meat, calling them coffins (meaning basket) rather than fruit; and the main use for apples, once they were available, was in cider. However, there are American apple pie recipes, both manuscript and printed, from the 18th century, and it has since become a very popular dessert. Apple varieties are usually propagated by grafting, as clones, but in the New World, planting from seeds was more popular, which quickly led to the development of hundreds of new native varieties.</p>
<p>Apple pie was a common food in 18th-century Delaware. As noted by the New Sweden historian Dr. Israel Acrelius in a letter: "Apple pie is used throughout the whole year, and when fresh Apples are no longer to be had, dried ones are used. It is the evening meal of children."</p>
<p>The mock apple pie, made from crackers, was probably invented for use aboard ships, as it was known to the British Royal Navy as early as 1812. The earliest known published recipes for mock apple pie date from the antebellum period of the 1850s. In the 1930s, and for many years afterwards, Ritz Crackers promoted a recipe for mock apple pie using its product, along with sugar and various spices.</p>
<p>Although eaten in Europe since long before the European colonization of the Americas, apple pie as used in the phrase "as American as apple pie" describes something as being "typically American." In the nineteenth and twentieth centuries, apple pie became a symbol of American prosperity and national pride. A newspaper article published in 1902 declared that "No pie-eating people can be permanently vanquished." The dish was also commemorated in the phrase "for Mom and apple pie" - supposedly the stock answer of American soldiers in World War II, whenever journalists asked why they were going to war. Jack Holden and Frances Kay sang in their patriotic 1950 song The Fiery Bear, creating contrast between this symbol of U.S. culture and the Russian bear of the Soviet Union.</p>`,
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
  <p>In a 100-gram reference amount, raw pineapple is a rich source of manganese (44% Daily Value, DV) and vitamin C (58% DV), but otherwise contains no essential nutrients in significant quantities.</p>
  <p>Pineapple juice is excellent when used as a marinade. In fact, the pineapple's bromelain enzyme is so powerful in breaking down tissue that those who work with the fresh fruit in the fields and canneries must wear gloves to protect their skin. The juice not only tenderizes tough meats but also adds a taste of the tropics to recipes.</p>
  <p>The same bromelain enzyme in fresh pineapple will cause gelatins to fail to firm up and dairy products to separate. Cooking nullifies the enzyme, so use canned instead of fresh pineapple in your gelatin molds.</p>
  <p>Pineapple juice is also an excellent choice as an acidulator to keep other products from oxidizing and turning brown, but use canned rather than fresh so it will not soften the foods soaking in it.</p>
  <p>Some chefs advise slicing off the green leafy top and standing the pineapple upside-down on the cut end for half an hour. This lets the sweeter juices on the bottom travel to permeate the rest of the fruit for a sweeter overall end product.</p>
  <p>The tough core that is usually discarded or pressed for juice can also be sliced lengthwise and used as stirrers for fruit drinks.</p>
  <p>Hollowed out pineapple boats make a lovely edible presentation for cold salads or vegetables.</p>
  <p>Pineapple Upside-Down Cake is a favorite American dessert; try it the next time you want to make a flavorful, summer dessert.</p>
  <p>Pineapple also works well in savory dishes, marrying well with pork or seafood.</p>
  <p>Sweet and sour recipes often use pineapple chunks or juice.</p>`,
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
