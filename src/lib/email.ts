import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email functionality will be disabled.");
}

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface OrderEmailData {
  to: string;
  orderNumber: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export async function sendOrderConfirmationEmail(data: OrderEmailData) {
  if (!resend) {
    console.log("Email not sent - Resend not configured");
    return;
  }

  const itemsHtml = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">$${(item.price / 100).toFixed(2)}</td>
      </tr>
    `
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">PoopDLoop</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Order Confirmation</p>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="color: #111827; margin-top: 0;">Thank you for your order!</h2>
          <p>Your order <strong>#${data.orderNumber}</strong> has been confirmed.</p>

          <h3 style="color: #111827; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f9fafb;">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">Item</th>
                <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e5e7eb;">Qty</th>
                <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e5e7eb;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="margin-top: 20px; padding: 20px; background: #f9fafb; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Subtotal:</span>
              <span>$${(data.subtotal / 100).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Shipping:</span>
              <span>$${(data.shipping / 100).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Tax:</span>
              <span>$${(data.tax / 100).toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; border-top: 2px solid #e5e7eb; padding-top: 12px; margin-top: 12px;">
              <span>Total:</span>
              <span style="color: #8B5CF6;">$${(data.total / 100).toFixed(2)}</span>
            </div>
          </div>

          <h3 style="color: #111827; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px; margin-top: 30px;">Shipping Address</h3>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">
            ${data.shippingAddress.street}<br>
            ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.postalCode}<br>
            ${data.shippingAddress.country}
          </p>

          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            If you have any questions about your order, please contact our support team.
          </p>
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            &copy; ${new Date().getFullYear()} PoopDLoop. All rights reserved.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: "PoopDLoop <orders@poopdloop.com>",
      to: data.to,
      subject: `Order Confirmation #${data.orderNumber}`,
      html,
    });
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
  }
}

export async function sendShippingNotificationEmail(data: {
  to: string;
  orderNumber: string;
  trackingNumber?: string;
  carrier?: string;
}) {
  if (!resend) {
    console.log("Email not sent - Resend not configured");
    return;
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Order Has Shipped</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">PoopDLoop</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Shipping Notification</p>
        </div>

        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="color: #111827; margin-top: 0;">Your order is on its way!</h2>
          <p>Great news! Your order <strong>#${data.orderNumber}</strong> has been shipped.</p>

          ${data.trackingNumber ? `
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Carrier:</strong> ${data.carrier || "Standard Shipping"}</p>
            <p style="margin: 0;"><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
          </div>
          ` : ""}

          <p style="color: #6b7280;">
            You will receive another email when your package is delivered.
          </p>
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            &copy; ${new Date().getFullYear()} PoopDLoop. All rights reserved.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: "PoopDLoop <orders@poopdloop.com>",
      to: data.to,
      subject: `Your Order #${data.orderNumber} Has Shipped!`,
      html,
    });
  } catch (error) {
    console.error("Failed to send shipping notification email:", error);
  }
}
