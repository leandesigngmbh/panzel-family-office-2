// import { EmailTemplate } from "@/components/email/EmailTemplate";
import { Resend } from "resend";

import { NextResponse } from "next/server";
import NikeReceiptEmail from "@/components/deprected/email/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  //   try {
  //     return NextResponse.json({ hello: "world" });
  //   } catch (error) {
  //     return NextResponse.json({ error });
  //   }

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["conrad.mahnkopf@wearelean.com"],
      subject: "Hello world",
      react: NikeReceiptEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
