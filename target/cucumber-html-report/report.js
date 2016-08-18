$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckOut.feature");
formatter.feature({
  "id": "checkout-the-cart",
  "description": "As a User\r\nI need to be able to Check out my shopping cart\r\nso that I can compelte my shopping",
  "name": "Checkout the cart",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "checkout-the-cart;successful-checkout-for-a-logged-in-user-with-cart-having-one-item",
  "description": "",
  "name": "successful checkout for a logged in user with cart having one item",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "user \"banuprakash.urs@gmail.com\" has logged in",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "has \"Microsoft Lumia 640\" mobile in the cart priced Rs \"10000\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "Vat is \"15\" %",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "user checks out the cart",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "confirmation of billing is generated with \"Microsoft Lumia 640\" mobile",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "Total price is Rs \"11500\"",
  "keyword": "And ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "banuprakash.urs@gmail.com",
      "offset": 6
    }
  ],
  "location": "CheckOutStepsDefinition.user_has_logged_in(String)"
});
formatter.result({
  "duration": 1050813559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Lumia 640",
      "offset": 5
    },
    {
      "val": "10000",
      "offset": 56
    }
  ],
  "location": "CheckOutStepsDefinition.has_mobile_in_the_cart_priced_Rs(String,String)"
});
formatter.result({
  "duration": 416683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CheckOutStepsDefinition.Vat_is_(String)"
});
formatter.result({
  "duration": 304910,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutStepsDefinition.user_checks_out_the_cart()"
});
formatter.result({
  "duration": 23794906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Lumia 640",
      "offset": 43
    }
  ],
  "location": "CheckOutStepsDefinition.confirmation_of_billing_is_generated_with_mobile(String)"
});
formatter.result({
  "duration": 7483859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11500",
      "offset": 19
    }
  ],
  "location": "CheckOutStepsDefinition.Total_price_is_Rs(String)"
});
formatter.result({
  "duration": 442572,
  "status": "passed"
});
});