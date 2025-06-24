// using PROMISES

let saving_Amount =2000000
console.log(`Wallet Balance: Rs.${saving_Amount}`);

const items = [
    { name: "Smartphone", price: 60000 },
    { name: "Laptop", price: 75000 },
    { name: "Tablet", price: 30000 },
    { name: "Smartwatch", price: 15000 },
    { name: "Bluetooth Earbuds", price: 8000 },
    { name: "Gaming Console", price: 45000 },
    { name: "Monitor", price: 20000 },
    { name: "Keyboard", price: 5000 },
    { name: "External Hard Drive", price: 7000 },
    { name: "Router", price: 6000 }
];

console.log("Available Items:", items);

function createOrder(items) {
    return new Promise((resolve, reject) => {
        console.log("Order Created:");

        const selectItems = items.filter(item =>
            item.name === "Laptop" || item.name === "Smartwatch" || item.name === "Gaming Console"
        );

        console.log("Order Details:", selectItems);

        if (selectItems.length > 0) {
            resolve(selectItems);
        } else {
            reject("No item selected for purchase.");
        }
    });
}

function payment(selectItems) {
    return new Promise((resolve, reject) => {
        const totalPrice = selectItems.reduce((sum, item) => sum + item.price, 0);
        console.log("Total Amount:", totalPrice);

        if (totalPrice <= saving_Amount) {
            console.log(`Payment of Rs.${totalPrice} successful`);
            saving_Amount -= totalPrice;
            resolve();
        } else {
            reject("Payment Failed: Insufficient Balance");
        }
    });
}

function orderSummary() {
    return new Promise((resolve) => {
        console.log("Order Summary:");
        console.log("--Payment Successful--");

        const selectItems = items.filter(item =>
            item.name === "Laptop" || item.name === "Smartwatch" || item.name === "Gaming Console"
        );

        console.log("Purchased Items:", selectItems);
        resolve();
    });
}

function updateWallet() {
    return new Promise((resolve) => {
        console.log(`Updated Wallet Balance: Rs.${saving_Amount}`);
        resolve();
    });
}

// Execution
createOrder(items)
    .then(payment)
    .then(orderSummary)
    .then(updateWallet)
    .catch((error) => {
        console.log("Error:", error);
    });
