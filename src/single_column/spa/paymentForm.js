import KRGlue from "@lyracom/embedded-form-glue";

/* Load the payment form library */
const { KR } = await KRGlue.loadLibrary(env.clientDomain, env.publicKey);

/* I Render the payment form */
await KR.renderElements("#myPaymentForm");

/* I customize the order of the payment methods in the payment form */
await KR.setFormConfig({
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
  },
});

/* expiry date and cvv on the same line */
KR.setFormConfig({ form: { layout: "compact" } });

/* I set the form token */
await KR.setFormConfig({ formToken: env.formTokens.paymentMethods5 });
