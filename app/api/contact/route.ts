import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, topic, message } = body;

    if (!firstName || !lastName || !email || !topic || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // TODO: Plug in email service here (e.g. Resend, SendGrid, Nodemailer)
    // Example with Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Teacher's Pension <noreply@tpension.com>",
    //   to: "ogarcia@tpension.com",
    //   subject: `New Contact: ${firstName} ${lastName} — ${topic}`,
    //   text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nTopic: ${topic}\n\nMessage:\n${message}`,
    // });

    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      topic,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
