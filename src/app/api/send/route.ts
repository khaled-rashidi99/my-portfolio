import { EmailTemplate } from "../../components/Contact/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_MEaM7k78_5nAWZBuyTigY4aKGaeDztX1T");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["khaled.rashidi99@outlook.com"],
      subject: "Hello from Portfolio!",
      react: EmailTemplate({
        fullName: name,
        email: email,
        phoneNumber: phone,
        message: message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
