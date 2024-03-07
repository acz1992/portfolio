/* import { EmailTemplate } from "../../../components/EmailTemplate";
 */ import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: "Adam <acz1992@hhotmail.co.uk>",
			to: ["acz1992@hotmail.co.uk"],
			subject: "hello world",
			react: (
				<>
					<p>Email Body</p>
				</>
			),
		});
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
