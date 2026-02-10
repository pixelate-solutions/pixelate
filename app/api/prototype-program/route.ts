import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface PrototypeProgramBody {
  name?: string;
  email?: string;
  company?: string;
  buildGoal?: string;
  capabilityDemo?: string;
  timeline?: string;
  nextStepPreference?: string;
}

const formatMultiline = (value: string) => value.replace(/\n/g, '<br/>');

export async function POST(request: NextRequest) {
  let body: PrototypeProgramBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const {
    name,
    email,
    company,
    buildGoal,
    capabilityDemo,
    timeline,
    nextStepPreference,
  } = body;

  if (!name || !email || !buildGoal || !capabilityDemo || !timeline || !nextStepPreference) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Pixelate Prototype Program" <${process.env.SMTP_USER}>`,
      to: process.env.PROTOTYPE_RECIPIENT,
      subject: `Prototype Program lead: ${name}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                <tr style="background-color: #222222;">
                  <td align="center" style="padding: 20px;">
                    <img src="cid:logo@pixelate" alt="Pixelate Logo" width="120" style="display: block; margin: 0 auto;" />
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="color: #333333; margin-bottom: 16px;">New Prototype Program Lead</h2>
                    <p style="color: #555555; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>What they want to build:</strong><br/>${formatMultiline(buildGoal)}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>Prototype should demonstrate:</strong><br/>${formatMultiline(capabilityDemo)}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>Timeline:</strong> ${timeline}</p>
                    <p style="color: #555555; margin: 8px 0;"><strong>Preferred next step:</strong> ${nextStepPreference}</p>
                  </td>
                </tr>
                <tr style="background-color: #f4f4f4;">
                  <td align="center" style="padding: 12px; font-size: 12px; color: #999999;">
                    Submitted from /prototype-program at www.pixelate.solutions<br/>
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
          cid: 'logo@pixelate',
        },
      ],
    });

    return NextResponse.json({ message: 'Lead submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Prototype program email error:', error);
    return NextResponse.json({ message: 'Error sending lead.' }, { status: 500 });
  }
}
