// 👉 Definition: High-level modules should not depend on low-level modules. Instead, both should depend on abstractions.

// 💡 Example: Order Service Depending on Payment
// 🚨 ❌ Bad Example (Violating DIP)

// class OrderService {
//     private payment = new PayPalPayment(); // ❌ Direct dependency on a low-level module

//     placeOrder() {
//         this.payment.process();
//     }
// }




interface PaymentProcessor {
    process(): void;
}

class PayPalPayment implements PaymentProcessor {
    process() {
        console.log("Processing PayPal Payment...");
    }
}

class OrderService {
    constructor(private paymentProcessor: PaymentProcessor) {}

    placeOrder() {
        this.paymentProcessor.process();
    }
}



