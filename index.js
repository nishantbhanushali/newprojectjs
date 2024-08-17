let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

// server side value

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

// 1

app.get("/cart-total", (req, res) => {
    let newItemPrice = parseFloat(req.query.newItemPrice);
    let cartTotal = parseFloat(req.query.cartTotal);
    let totalCartPrice = newItemPrice + cartTotal;
    res.send(`${totalCartPrice}`);
});

// 2

app.get("/membership-discount", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let isMember = req.query.isMember === "true";
    if (isMember) {
        cartTotal = cartTotal * (10 / 100);
    }
    res.send(cartTotal.toString());
});

// 3;
app.get("/calculate-tax", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    totalCart = cartTotal + cartTotal * (5 / 100);
    res.send(totalCart.toString());
});

// 4
app.get("/estimate-delivery", (req, res) => {
    let shippingMethod = req.query.shippingMethod;
    distance = parseFloat(req.query.distance);
    if (shippingMethod == "standard") {
        distance = distance / 50;
    } else {
        distance = distance / 100;
    }
    res.send(` ${distance}`);
});

// 5

app.get("/shipping-cost", (req, res) => {
    let weight = parseFloat(req.query.weight);
    let distance = parseFloat(req.query.distance);
    let shippingCost = weight * 2 * distance * 0.1;

    res.send(` ${shippingCost} $`);
});
s
// 6

app.get("/loyalty-points", (req, res) => {
    let purchaseAmount = parseFloat(req.query.purchaseAmount);
    let points = purchaseAmount * 2;
    res.send(` ${points}`);
});

app.listen(3000);
