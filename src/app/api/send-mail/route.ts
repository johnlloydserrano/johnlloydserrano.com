import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SES_SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SES_SMTP_USER,
        pass: process.env.SES_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SES_SMTP_SENDER,
      to: process.env.SES_SMTP_ADMIN_RECIEVER,
      subject: `Contact message from johnlloydserrano.com`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    await transporter.sendMail({
      from: process.env.SES_SMTP_SENDER,
      to: email,
      subject: 'Thank you for reaching out',
      text: `
        Hello ${name},  
        Thank you for contacting me! I have received your message and will respond as soon as possible.   
        
        Best regards,
        John Lloyd Serrano
        https://johnlloydserrano.com`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
