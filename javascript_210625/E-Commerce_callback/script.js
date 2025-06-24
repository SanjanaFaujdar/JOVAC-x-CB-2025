let saving_Amount = 2000000
console.log(`My Saving Amount: Rs.${saving_Amount}`);

const items = [
    { name: "Smart TV", price: 40000 },
    { name: "Soundbar", price: 15000 },
    { name: "Gaming Console", price: 30000 },
    { name: "Streaming Device", price: 5000 },
    { name: "Bluetooth Speaker", price: 8000 },
    { name: "Projector", price: 25000 },
    { name: "VR Headset", price: 28000 },
    { name: "Smart Lights Kit", price: 12000 },
    { name: "Wireless Headphones", price: 10000 },
    { name: "Home Security Cam", price: 7000 }
];

console.log("Available Items:", items);

function createOrder(items, callback) {
    console.log("Order Created:");
    const selectItems = items.filter(item =>
        item.name === "Smart TV" ||
        item.name === "Wireless Headphones" ||
        item.name === "Gaming Console"
    );
    console.log("Order Details:", selectItems);
    callback(selectItems);
}

function payment(selectItems, callback) {
    const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
    console.log("Total Amount:", totalPrice);

    if (totalPrice <= saving_Amount) {
        console.log(`Payment of Rs.${totalPrice} successful`);
        saving_Amount -= totalPrice;
        callback();
    } else {
        console.log("Payment Failed: Insufficient balance");
    }
}

function orderSummary(callback) {
    console.log("Order Summary:");
    console.log("--Payment Successful--");
    const selectItems = items.filter(item =>
        item.name === "Smart TV" ||
        item.name === "Wireless Headphones" ||
        item.name === "Gaming Console"
    );
    console.log("Order Details:", selectItems);
    callback();
}

function updateWallet() {
    console.log(`Saving Amount. New balance: Rs.${saving_Amount}`);
}

createOrder(items, function(selectItems) {
    payment(selectItems, function() {
        orderSummary(function() {
            updateWallet();
        });
    });
});
