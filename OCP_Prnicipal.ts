// . Open/Closed Principle (OCP)
//👉 Definition: A class should be open for extension but closed for modification.


// 💡 Example: Payment Methods (Credit Card, PayPal, UPI)
// 🚨 ❌ Bad Example (Violating OCP)

 export class PaymentMethods {
      constructor() {}
       processPayment(methodType: string){
        if (methodType === "creditCard") {
            console.log("Processing Credit Card Payment...");
        } else if (methodType === "paypal") {
            console.log("Processing PayPal Payment...");
        } else {
            console.log("Invalid Payment Method");
        }
       }
 }




 //GOOD CODE 
//  ✅ ✔️ Good Example (Following OCP)
//  New payment methods can be added without modifying existing code.
// Extensible architecture, following strategy design pattern.

  interface paymentProcess {
         processPaymentMethod(paymentinfo: string): void;
  }


  export class PayPalPaymentMethod implements  paymentProcess {
      processPaymentMethod(paymentinfo: string): void {
          console.log(" Paypal Payment Method accepted", paymentinfo);
      }
    
  }
  export class CreditCardPaymentMethod implements paymentProcess {
   processPaymentMethod(paymentinfo: string): void {
        console.log(" Credit Card Payment Method accepted");
       }

   }

   export class paymentService {
         constructor(private paymentProcess : paymentProcess){}
         processPayment(paymentinfo: string): void {
               this.paymentProcess.processPaymentMethod(paymentinfo);         }
          }