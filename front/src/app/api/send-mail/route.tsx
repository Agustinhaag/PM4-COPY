import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import TemplateEmail from "@/components/TemplateEmail";

const resend = new Resend(process.env.NEXT_PUBLIC_APIKEYRESEND);

export async function POST(req: NextRequest) {
  const { to, total, orders, name, products } = await req.json();

  const emailResponse = await resend.emails.send({
    from: "AH-Tech <onboarding@resend.dev>",
    to: to,
    subject: "Resumen de compra",
    react: <TemplateEmail order={orders} total={total} name={name} products={products}/>,
  });
  return NextResponse.json(emailResponse);
}
