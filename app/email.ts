"use server";

import nodemailer from "nodemailer";

const port = Number(process.env.EMAIL_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: port === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

type Data = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function sentContactEmail(data: Data) {
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `💼 New Message from ${data.name}`,
      text: `
    New Portfolio Inquiry
    -----------------------
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    
    Message:
    ${data.message}
  `,
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <div style="background-color: #2d3436; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px;">New Portfolio Inquiry</h2>
      </div>
      
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="color: #636e72; font-size: 16px;">You received a new message from your portfolio contact form:</p>
        
        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #2d3436; width: 100px;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; color: #2d3436;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #2d3436;"><strong>Email:</strong></td>
            <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #0984e3; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #2d3436;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #0984e3; text-decoration: none;">${data.phone}</a></td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #0984e3; border-radius: 4px;">
          <strong style="display: block; margin-bottom: 10px; color: #2d3436; font-size: 14px; text-transform: uppercase;">Message:</strong>
          <p style="white-space: pre-wrap; color: #2d3436; line-height: 1.6; margin: 0;">${data.message}</p>
        </div>
      </div>

      <div style="background-color: #f1f2f6; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0; font-size: 12px; color: #b2bec3;">
          Sent from your Portfolio Website • ${new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  `,
    });
    return { success: true, message: "Email Sent Successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Cannot send email, try again later",
      error,
    };
  }
}
