// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as path from 'path';

// configure your SMTP transporter (same as before)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Pixelate Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      subject: `Pixelate message from ${name}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                
                <!-- Header with Logo -->
                <tr style="background-color: #222222;">
                  <td align="center" style="padding: 20px;">
                    <img
                      src="cid:logo@pixelate"
                      alt="Pixelate Logo"
                      width="120"
                      style="display: block; margin: 0 auto;"
                    />
                  </td>
                </tr>
                
                <!-- Body Content -->
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="color: #333333; margin-bottom: 16px;">New Contact Form Submission</h2>
                    <p style="color: #555555; margin: 8px 0;">
                      <strong>Name:</strong> ${name}
                    </p>
                    <p style="color: #555555; margin: 8px 0;">
                      <strong>Email:</strong> ${email}
                    </p>
                    <p style="color: #555555; margin: 8px 0;">
                      <strong>Message:</strong><br/>
                      ${message.replace(/\n/g, '<br/>')}
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr style="background-color: #f4f4f4;">
                  <td align="center" style="padding: 12px; font-size: 12px; color: #999999;">
                    Someone submitted a new request at www.pixelate.solutions<br/>
                    &copy; ${new Date().getFullYear()} Pixelate Solutions LLC. All rights reserved.
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public', 'logo.png'),
          cid: 'logo@pixelate' // same as the img src CID
        }
      ]
    });


    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
