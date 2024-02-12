# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

[Mobile](./screenshots/mobile-screenshot.png)
[Desktop](./screenshots/desktop-screenshot.png)
[Active-State](./screenshots/active-state-screenshot.png)

### Links

- Solution URL: [Solution URL](https://carderbeebeebee.github.io/frontend-mentor-4-faq-accordion-main)
- Live Site URL: [Live Site URL](https://carderbeebeebee.github.io/frontend-mentor-4-faq-accordion-main)

## My process

My first instinct to build the accordion was to use <button> elements to build the sections of the accordion, which ultimately worked very well. Actually implementing the accordion was much more time consuming than I anticipated, as some of the solutions I saw online didn't seem ideal (a lot used inline styles, which I wanted to avoid doing as this seemed like slightly poor practice). After reading many, many different methods to build an accordion, I ultimately opted to just use some JavaScript to toggle classes when each button is clicked. 

I also spent much longer than I would have really liked trying to get the main container centered in the page and also behaving correctly. For some reason, I wanted to try and do this without using position:absolute, but in retrospect, I really wasted a massive amount of time on this - if it works, it works!

### Built with

- Semantic HTML5 markup
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

```html - I thought the accordion structure worked very well, and I was quite proud that I came up with this by myself.
<button id="accordion-1" class="accordion" onclick="toggleAccordion(this.id)">
  What is Frontend Mentor, and how will it help me?
  <img id = "btn-icon-1" class="button-icon" src="./assets/images/icon-plus.svg">
</button>
  <div id="panel-1" class="hidden">
    <p>Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.</p>
  </div>
```
```css - this nifty trick I learned to control the accordion panels - a true life saver. I also learned about doing some basic animation with the transition property:
.hidden {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.6s ease-out;
}

.hidden > p {
    overflow: hidden;
}

.active {
    margin-bottom: 20px;
    grid-template-rows: 1fr;
}
```
```css - learning about focus:visible, and using it to set focus states:
button:focus-visible {
    outline: solid 2px #2f1533;
    border-radius: 5px;
}
```
```js - there were several iterations of this function (initially much more complex), but I refactored it to something simple and effective:
function toggleAccordion(id) {
    const button = document.getElementById(id);
    const panel = button.nextElementSibling;
    button.classList.toggle("open");
    panel.classList.toggle("active");
}
```

### Continued development

More flexbox practice would be great, as I feel like I'm actually starting to get to grips with it. Also just building more accordions would be useful practice as they are less straightforward than they seem!

I'd also like to do more with CSS animations - I did consider animating the plus and minus icons on the buttons in this project, but felt like I had already spent long enough on this and that it was time to move on.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - Especially useful to learn about the :focus pseudo-selector.
- [Stack Overflow](https://stackoverflow.com/) - A great way to see many different approaches to solving the same problems!

## Author

- Website - [Website](https://carderbeebeebee.github.io/)
- Frontend Mentor - [@carderbeebeebee](https://www.frontendmentor.io/profile/carderbeebeebee)

## Acknowledgments

One particularly useful resource was this video by Kevin Powell on using grid-row-height to control an accordion:
[Youtube](https://www.youtube.com/watch?v=B_n4YONte5A)
