# ![PizzaFat](https://raw.githubusercontent.com/barwis/pizzaFat/master/public/assets/img/header_logo.gif "PizzaFat!") PizzaFat!

Small Node, express, AngularJS demo.

## Info
Angular app split into three component/pages: home, creator and basket (all three have corresponding folders within the public/app/components folder.

Basket content shared between modules through BasketService.

List of toppings loaded from "external" (well, it's not really external, but loaded via http request anyway).

Basked is being stored in localStorage.

## Usage
1. Clone
2. run `npm install`
3. run `node index.js`
4. App available under [http://localhost:3000](http://localhost:3000)
