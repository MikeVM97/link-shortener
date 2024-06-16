export const URL =
  process.env.NODE_ENV === "production"
    ? process.env.CLIENT_HOSTNAME
    : "http://localhost:3000";

export const PAYPAL_URL =
  "https://www.sandbox.paypal.com/donate/?hosted_button_id=QYME3NYDVFASJ";
