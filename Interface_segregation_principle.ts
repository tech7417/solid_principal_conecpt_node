// 👉 Definition: A class should not be forced to implement interfaces it doesn’t use.

// 💡 Example: Order Process with Different Payment & Shipping Methods
// 🚨 ❌ Bad Example (Violating ISP)


interface Order {
    processPayment(): void;
    shipOrder(): void;
}

class DigitalOrder implements Order {
    processPayment() {
        console.log("Processing payment...");
    }

    shipOrder() {
        throw new Error("❌ Digital orders don't require shipping!"); // Violating ISP
    }
}



// 🔴 Issue: DigitalOrder is forced to implement shipOrder() even though it doesn’t ship.

// ✅ ✔️ Good Example (Following ISP)




interface PaymentProcessor {
    processPayment(): void;
}

interface ShippingProcessor {
    shipOrder(): void;
}

export class PhysicalOrderS implements PaymentProcessor, ShippingProcessor {
    processPayment() {
        console.log("Processing payment...");
    }

    shipOrder() {
        console.log("Shipping order...");
    }
}

export class DigitalOrders implements PaymentProcessor {
    processPayment() {
        console.log("Processing payment...");
    }
}

