/* I customize the order of the payment methods in the payment form */
KR.setFormConfig({
  smartForm: {
    userPaymentMethodsOrder: [
      "APPLE_PAY",
      "GOOGLEPAY",
      "SAMSUNG_PAY",
      "IP_WIRE",
    ],
  },
});

/* expiry date and cvv on the same line */
KR.setFormConfig({ form: { layout: "compact" } });
