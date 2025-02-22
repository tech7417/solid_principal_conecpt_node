// single responsebility principal 

// 1. Single Responsibility Principle (SRP)
// 👉 Definition: A class should have only one reason to change (it should do only one thing).


// Imagine a class handling both order placement and payment processing:

// 🚨 ❌ Bad Example (Violating SRP)

// class OrderService {
//       constructor(){};

//        placeOrder(orderdetails:string){
//          console.log('order details.......');
//           this.processPayment(orderdetails) //TODO: mixing payment and order in same class 
//        }

//         processPayment(paymentInfo:string){
//              console.log('payment process...');
//         }
// }
// ----------------------------
 
// Here, OrderService is responsible for both order placement and payment. If we change payment logic, the order logic is also affected.
export class OrderDetails {
       constructor(private paymentService : PaymentService) {}
        placeOrder(orderdetails:string){
          this.paymentService.processPayment(orderdetails)

        }
}

export class PaymentService {
     constructor() {}
     processPayment(paymentInfo:string){
          console.log('payment process... class  process');
     }
      
 }


//  👉 Why Use SRP?

// Easier maintenance: Changes in payment logic don’t affect order logic.
// Scalability: We can extend PaymentService (e.g., add PayPal, Stripe) without modifying OrderService.