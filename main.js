// css import
import './styles/style.css'

let price;

// main component DOM
document.querySelector('.container').innerHTML = `
<div class="component">
    <header class="component__header">
      <h1 class="component__title">
        Simple, traffic-based pricing
      </h1>
      <p class="component__text">\
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </header>
    <main>
      <section class="component__body">
        <p>100k pageviews</p>
        <label for="range" class="component__slider">
          <input type="range" name="range" min="0" max="100" step="1" value="16" class="component__slider__input">
          <output for="range" class="component__slider__output">$${16}.00</output>
          <span class="component__slider__month">/ month</span>
        </label>
        <label class="component__toggle">
          <label class="component__toggle__monthly">Monthly Billing</label>
          <input type="checkbox" class="component__toggle__input">
          <span class="component__toggle__switch"></span>
          <label class="component__toggle__yearly">Yearly Billing</label>
          <span class="component__discount">${price}</span>
        </label>
      </section>
      <section class="component__footer">
        <div class="component__text">
          <p class="component__text__item">Unlimited Websites</p>
          <p class="component__text__item">100% data ownership</p>
          <p class="component__text__item">Email reports</p>
        </div>
        <div class="component__button">
          <a href="#" class="component__button__item">Start my trial</a>
        </div>
      </section>
    </main>
  </div>
`