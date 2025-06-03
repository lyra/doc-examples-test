/* I customize the order of the payment methods in the payment form */
KR.setFormConfig({
  smartForm: {
    userPaymentMethodsOrder: [
      "APPLE_PAY",
      "GOOGLEPAY",
      "SAMSUNG_PAY",
      "IP_WIRE",
      "BIZUM",
      "PAYCONIQ",
      "UPI",
      "PAYPAL",
      "MB_WAY",
      "MULTIBANCO",
    ],
    otherPaymentMethods: {
      labelVisibility: "hide",
      grid: {
        columns: "max",
        justify: "start",
      },
    },
  },
});
