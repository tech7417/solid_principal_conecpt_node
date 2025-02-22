import { CreditCardPaymentMethod, PaymentMethods, paymentService, PayPalPaymentMethod } from "./OCP_Prnicipal";
import { OrderDetails, PaymentService } from "./single_principal";
 import { DigitalOrder, PhysicalOrder} from './liskov_substitution'
import { DigitalOrders, PhysicalOrderS } from "./Interface_segregation_principle";
let paymentProcess = new PaymentService()
const result = new OrderDetails(paymentProcess);
result.placeOrder("orderdetails");


 let ocp = new PaymentMethods()
 ocp.processPayment('creditCard')

let creditCardInstamce = new CreditCardPaymentMethod()
 new paymentService(creditCardInstamce);
  let paypalInstance = new PayPalPaymentMethod()
let result1 =  new paymentService(paypalInstance);
result1.processPayment("100")


 // LSP 
 let orderLSP1 = new  PhysicalOrder();
 orderLSP1.processOrder()
 
let orderLSP = new  DigitalOrder();
//  orderLSP.processOrder()



 //ISP
 let orderISP = new  PhysicalOrderS();
 orderISP.processPayment()
 orderISP.shipOrder()


 let DIGITALISP = new  DigitalOrders();
 DIGITALISP.processPayment()



 //DIP

 // Usage
const payment = new PayPalPayment();
const orderService = new OrderService(payment);
orderService.placeOrder();

