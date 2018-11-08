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

var categories = [{
    name: 'All Time Classic',
    description: 'Just the basics. Classic flavors you\'ve grown up with.',
    products: [{
      name: 'Kiwi',
      image: {
        src: '/images/kiwi.jpg',
        alt: ''
      }
    },
    {
      name: 'Mango',
      image: {
        src: '/images/mango.jpg',
        alt: ''
      }
    },
    {
      name: 'Cantaloupe',
      image: {
        src: '/images/cantaloupe.jpg',
        alt: ''
      }
    }]
  },
  {
    name: 'Berry Special',
    description: 'Jazz things up by adding fresh berries to the mix!',
    products: [{
      name: 'Blackberry',
      image: {
        src: '/images/blackberry.jpg',
        alt: ''
      }
    },
    {
      name: 'Strawberry',
      image: {
        src: '/images/strawberry.jpg',
        alt: ''
      }
    },
    {
      name: 'Blueberry',
      image: {
        src: '/images/blueberry.jpg',
        alt: ''
      }
    }]
  },
  {
    name: 'Fruit Blast',
    description: 'When a few berries are not enough go all in with a base built on all types of fresh fruit.',
    products: [{
      name: 'Grapes',
      image: {
        src: '/images/grapes.jpg',
        alt: ''
      }
    },
    {
      name: 'Green Apple',
      image: {
        src: '/images/green-apple.jpg',
        alt: ''
      }
    },
    {
      name: 'Pineapple',
      image: {
        src: '/images/pineapple.jpg',
        alt: ''
      }
    }]
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    section: '/', 
    gtmid: gtmid, 
    title: 'Home',
    products: productsNew 
  });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { 
    section: '/blog', 
    gtmid: gtmid, 
    title: 'Blog', 
    featured: [blogCups, blogHealth], 
    recent: [blogBites] 
  });
});

/* GET blog post. */
router.get('/blog/no-cook-yogurt-cups', function(req, res, next) {
  res.render('post', { 
    section: '/blog', 
    gtmid: gtmid, 
    title: `Blog: ${blogCups.title}`, 
    post: blogCups, 
    recent: [blogBites] 
  });
});

/* GET blog post. */
router.get('/blog/frozen-yogurt-bites', function(req, res, next) {
  res.render('post', { 
    section: '/blog', 
    gtmid: gtmid, 
    title: `Blog: ${blogBites.title}`, 
    post: blogBites, 
    recent: [blogCups] 
  });
});

/* GET blog post. */
router.get('/blog/healthy-froyo', function(req, res, next) {
  res.render('post', { 
    section: '/blog', 
    gtmid: gtmid, 
    title: `Blog: ${blogHealth.title}`, 
    post: blogHealth, 
    recent: [blogBites] 
  });
});

/* GET menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { 
    section: '/menu', 
    gtmid: gtmid, 
    title: `Menu`, 
    categories: categories
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
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
