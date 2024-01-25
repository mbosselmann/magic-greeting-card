# ✨ Let's Create a Magic Greeting Card! ✨

Today we want to learn more about how we can build a magical greeting card using **HTML**, **CSS** and **JavaScript**.
Since we only have a limited time frame to build the card, there are already some stylings that we have prepared. The basic structure of the HTML is also already build and all the logic we need for our magic is there too. ✨

Nevertheless, there will be enough options for you to customize your magical card. :)

## Guide

Starting off with the blank project, let's explain the structure and what we're about to build:

```
├── README.md // you're here
├── images // the images we're going to pick from, unless you want to upload your own. that image should also go here.
│   ├── picture.jpg
│   ├── picture.jpg
│   ├── picture.jpg
│   ├── ...
├── index.html // our landing page
├── style.css // all your stylings go into this file
├── index.js // you can ignore this for now
│   // ignore all of these files and folders
├── package-lock.json
├── package.json
├── sandbox.config.json
└── .where-the-magic-is
```

To build our magic holiday card, we will need to:

- Think about the **structure of our card** that we will build with **HTML**.
- Add **some styles** to make it look nice. To achieve this, we will use **CSS**.
- And **add some magic** to our card. This will be done with **JavaScript**.

Let's get started with the structure of our card! 🥳

### Semantic HTML

#### Explainer

- HTML is short for `HyperText Markup Language`.
- It is giving content on websites `meaning and structure`. You can imagine HTML as the skeleton
  or the most basic building block of the Web.

Let's analyze the word for more
clarification:

- `Hypertext`: Refers to the ability of HTML to create links that link one webpage to another. (Either on a single website or in between different websites.) This is a fundamental aspect of the web and the idea behind the "world wide" interconnection.
- `Markup Language`: Refers to a syntax that uses specific element to structure or format a document. You have already learned about a markup language, which is called "Markdown". While Markdown has a very simple syntax and is primarily used for formatting, HTML is more complex and its primarily used to structure a document.

**When we write HTML we use the following terms:**

- `HTML element`: every piece of content in a HTML document is placed inside of an HTML element
- `HTML tags`: the elements are written in form of HTML tags, meaning surrounded by `<>` and
  `</>`
- `HTML attributes`: some HTML elements need additional information in order to work properly. This information is given by HTML attributes
- `local attributes`: There are attributes that are specific to some HTML elements, for example `src`, which only makes sense if a resource is supposed to be embedded into the webpage (e.g. images or videos)
- `global attributes`: There are also attributes that can be added to any kind of element. (e.g. `class`, `id`, `style`, `hidden`)

That is all we need to know about HTML for now. Let's build our magic holiday card!

#### Coding

Write the base structure for your magic holiday card:

```html
<main>
  <h1>Greetings from Hamburg</h1>
  <h2>Dear Felix,</h2>
  <p>
    magical greetings from Hamburg! The Speicherstadt at night is fantastic. You
    should have seen that!
  </p>
  <p>
    I hope you are doing well and that you are enjoying your holidays. May your
    holidays be exactly what you need - a perfect mix of relaxation, adventure
    and moments of happiness.
  </p>
  <p>
    All the best, <br />
    Mareike
  </p>
</main>
```

#### Semantic HTML

When we write HTML, we always want to make sure that we use the right HTML elements for the right purpose. This is called `semantic HTML`. Semantic HTML means that we use HTML elements for their intended purpose. For example, we use a `<h1>` element for the main headline of our page, a `<p>` element for paragraphs and so on.

**The Benefits of Writing Semantic HTML Are:**

- `Accessibility`: Screenreaders can function much better with semantic HTML, which can help e.g. visually impaired users to navigate the webpage and have a better user experience
- `SEO`: It's relevant for search engines to evaluate the importance and the context of the different parts of a web page
- `Readability`: It's easier for other developers to understand your code. And also for yourself in the future!

### Style Fonts with CSS Classes

The basic structure of our card is done for now. 🚀 Now we want to add some styles to make it look nice. 💅 To achieve this, we will use CSS.

#### Explainer

**CSS means Cascading Stylesheets**. While HTML defines the structure and semantics of your content, we use CSS for design and layout.

Let's analyze the word for more
clarification:

- `Cascading`: CSS rules are applied in a cascading manner. This means that the order of the rules is important. If there are conflicting rules, the last one will be applied.
- `Stylesheets`: CSS rules are written in a stylesheet. This is a separate file that is linked to the HTML document. This way, we can separate the content from the design.

**When we write CSS we use the following terms:**

- `Selector`: A CSS selector is used to specify the elements to which CSS rules apply.
- `Property`: Name for a particular property to which a value is attributed.
- `Value`: The value we assign to a property.
- `Declaration`: Each pair of property and value is a declaration.
- `Rule`: A rule consists of one or more declarations. It is written in the following way: `selector { property: value; }`

Today we will only work with one type of selector, which is the `class selector`. We will use classes to style our HTML elements. To achieve this, we need to add a `class` attribute to the HTML element we want to style. The value of the class attribute is the name of the class we want to use. We can use the same class for multiple elements.

#### Coding

The first thing we want to do is to add a class to the `<h1>` element. We will use the class `headline` for this element. We want to change the font family, the color and the font size of the headline. To achieve this, we need to do the following:

```css
.headline {
  font-family: "Allison";
  color: blue;
  font-size: 56px;
}
```

Within this project we have already added some fonts that you can use:

- `Pacifico`
- `Great Vibes`
- `Gluten`
- `Allison`
- `Handlee`
- `Peralta`

Nevertheless, there are also some web safe fonts that you can use like `Helvetica`, `Gill Sans` or `Baskerville`. Web safe fonts means that they are available on most operating systems and browsers. Feel free to try them out!

### Split into two Sections

We need the predefined classes `.card`, `.front` and `.back` to be added to their respective tags in order to apply our global styles:

- `.card` gives padding, sets the size of the card and is what will be flipped
- `.front` applies basic styling and positions the front of the magic holiday card
- `.back` gets rotated and flipped to the back

```html
<main class="card">
  <section class="front">
    <h1 class="headline">Greetings from Hamburg</h1>
  </section>
  <section class="back">
    <h2>Dear Felix,</h2>
    <p>
      magical greetings from Hamburg! The Speicherstadt at night is fantastic.
      You should have seen that!
    </p>
    <p>
      I hope you are doing well and that you are enjoying your holidays. May
      your holidays be exactly what you need - a perfect mix of relaxation,
      adventure and moments of happiness.
    </p>
    <p>
      All the best, <br />
      Mareike
    </p>
  </section>
</main>
```

> 💡 This _hides_ the back of the card. this might be surprising but is what we want.

### Make the Turn

#### Explainer and Coding

If you click around you will see that the card is not turning yet. We need to add some JavaScript to make this happen. That's why we do not need to add a class attribute to our HTML elements. This will be solved with JavaScript.

But we need to add the turning in CSS. In combination with the magic JS, the card "turns" now.

```css
.flipcard {
  transform: rotateY(180deg);
}
```

When you now click on the card you will see that it is turning! Yay. :)

### Add Static Image from `/images`

Next step is to finish the front of the card. We want to add an image. We already prepared some images for you that you can use and that are stored in the `/images` folder. You can also upload your own images to codesandbox and use them. We add the image to the front of the card.

```html
<img
  class="postcardimage"
  src="./images/hamburg.jpg"
  alt="magic greeting card image"
/>
```

> 💡 `.postcardimage` is a prepared global class that makes the image cover the front of the card. sets `object-fit: cover`.

### More Styles

This is a good chance to update the color of the `.headline` and add:

```css
background-color: white;
padding-bottom: 10px;
```

You can change the style of writing and maybe also the font size:

```css
.card {
  font-family: "Handlee";
  font-size: 32px;
}
```

**Bonus: Opaque background**

Maybe you want to have to have the background-color of your headline to be transparent. You can do this by adding `header` element to your front. You also need to put the headline inside of the header element.

Feel free to change the color of the background to your liking:

```css
.header {
  background-color: aliceblue;
}
```

### Add Sparkle Effect

Last but not least, we also want to add a sparkle effect to the front side of our card. We will do this by adding a canvas element to the first section of our card.

```html
<canvas></canvas>
```

Now we will write a little bit of JavaScript. JavaScript has all the logic we need to create the sparkle effect. We will use a function that we have already prepared for you.

And we need to call the function that initializes and updates the sparkle effect inside of our canvas element. We need to hand over to values: the amount of stars we want to be created and the color they should have.

```js
setupCanvas(20, "peachpuff");
```

### Keep styling

Feel free to keep styling your card. You can change the colors, the fonts, the images, the text shadow, the texts, add more paragraphs, add small images to the back and so on. You can also add more images to the `/images` folder and use them. :)

In the end, your magic greeting card could look like this:

```html
<main class="card">
  <section class="front">
    <header class="header">
      <h1 class="headline">Greetings from Hamburg</h1>
    </header>
    <img
      class="postcardimage"
      src="./images/hamburg.jpg"
      alt="magic greeting card image"
    />
    <canvas></canvas>
  </section>
  <section class="back">
    <h2>Dear Felix,</h2>
    <p>
      magical greetings from Hamburg! The Speicherstadt at night is fantastic.
      You should have seen that!
    </p>
    <p>
      I hope you are doing well and that you are enjoying your holidays. May
      your holidays be exactly what you need - a perfect mix of relaxation,
      adventure and moments of happiness.
    </p>
    <p>
      All the best, <br />
      Mareike
    </p>
  </section>
</main>
```

```css
.headline {
  font-family: "Allison";
  color: midnightblue;
  font-size: 56px;
  padding-bottom: 10px;
}

.flipcard {
  transform: rotateY(180deg);
}

.card {
  font-family: "Handlee";
  font-size: 32px;
}

.header {
  background-color: aliceblue;
}

.title {
  font-family: "Allison";
}
```

```js
setupCanvas(20, "aliceblue");
```

## Credits

- cake.jpg - Photo by <a href="https://unsplash.com/@biglaughkitchen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Deva Williamson</a> on <a href="https://unsplash.com/photos/white-and-red-cake-with-black-and-white-icing-on-top-rHz-DkDgA1k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- cozy-cat.jpg - Photo by <a href="https://unsplash.com/@paleskinbabe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anton Lochov</a> on <a href="https://unsplash.com/photos/brown-tabby-cat-on-white-textile-_b020HIGZUE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- hamburg.jpg - Photo by <a href="https://unsplash.com/@claudiotesta?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Claudio Testa</a> on <a href="https://unsplash.com/photos/canal-between-buildings-during-nighttime-qpemSW6_1Z0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- happy-dog.jpg - Photo by <a href="https://unsplash.com/@jasanmiguel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ja San Miguel</a> on <a href="https://unsplash.com/photos/golden-retriever-inside-car-_-QQuvAwQ-0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- hearts.jpg - Photo by <a href="https://unsplash.com/@freestocks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">freestocks</a> on <a href="https://unsplash.com/photos/heart-bokeh-light-Y9mWkERHYCU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- lizard.jpg - Photo by <a href="https://unsplash.com/@bang_gecko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">verdian chua</a> on <a href="https://unsplash.com/photos/brown-and-white-lizard-on-brown-wooden-surface-68hC4vYTSFo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- pineapple.jpg - Photo by <a href="https://unsplash.com/@pineapple?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pineapple Supply Co.</a> on <a href="https://unsplash.com/photos/ripe-pineapple-with-yellow-cone-and-sunglasses-NgDapgpAiTE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- snowscape-1.jpg - Photo by <a href="https://unsplash.com/@drosie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Donnie Rosie</a> on <a href="https://unsplash.com/photos/trees-covered-with-snow-during-daytime-O7L3MrlSAHA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- snowscape-2.jpg - Photo by <a href="https://unsplash.com/@dnevozhai?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Denys Nevozhai</a> on <a href="https://unsplash.com/photos/low-angle-photo-of-snow-field-duo-xV0TU7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- sparkles.jpg - Photo by <a href="https://unsplash.com/@besluk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luke Besley</a> on <a href="https://unsplash.com/photos/water-droplets-on-brown-surface-Mdz-EpieP3A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- squirrel.jpg - Photo by <a href="https://unsplash.com/@geraninmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Geranimo</a> on <a href="https://unsplash.com/photos/brown-squirrel-on-black-background-bKhETeDV1WM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- trees.jpg - Photo by <a href="https://unsplash.com/@jyrki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jyrki Nieminen</a> on <a href="https://unsplash.com/photos/snow-covered-tall-trees-during-daytime-Oo6oR1G-zv8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
