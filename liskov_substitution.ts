// Liskov Substitution Principle (LSP)
// 👉 Definition: Subclasses should be able to replace their parent class without breaking functionality.

// 💡 Example: Digital & Physical Products in Order Processing
// 🚨 ❌ Bad Example (Violating LSP)

//  export class Order {
//      constructor() {} ;
//       deliveryOrder(){
//         console.log("Shipping order...");
//       }
//  }
//   export class DigitalOrder extends  Order {
//     deliveryOrder(){
//         throw new Error("Digital order failed");
//       }

//   }

  // ✅ ✔️ Good Example (Following LSP)

   

  abstract class Order {
    abstract processOrder(): void;
}

export class PhysicalOrder extends Order {
    processOrder() {
        console.log("Shipping order...");
    }
}

export class DigitalOrder extends Order {
   
    processOrder() {
        console.log("Sending digital download link...");
        throw new Error("Digital order failed");
    }
}
