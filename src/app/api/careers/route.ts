import { NextResponse } from "next/server";
import { Resend } from "resend";

interface CareerFormData {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    position: string;
    preferredLocation: string;
    availability: string[];
    driversLicense: string;
    drivingExperience: string;
}

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data: CareerFormData = await request.json();

        // Validate required fields
        if (!data.fullName || !data.email || !data.phone) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Build the HTML email
        const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; text-align: center; }
        .header h1 { color: #d4af37; margin: 0; font-size: 24px; letter-spacing: 2px; }
        .header p { color: #aaa; margin: 8px 0 0; font-size: 13px; letter-spacing: 1px; }
        .body { padding: 30px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 14px; color: #d4af37; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee; }
        .field { margin-bottom: 10px; }
        .field-label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { font-size: 15px; color: #333; margin-top: 2px; }
        .badge { display: inline-block; background: #f0e6c8; color: #8a6d1b; padding: 3px 10px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 4px; }
        .footer { background: #f9f9f9; padding: 20px 30px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>VELVET VALET</h1>
            <p>New Job Application</p>
        </div>
        <div class="body">
            <div class="section">
                <div class="section-title">Applicant Information</div>
                <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${data.fullName}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                    <div class="field-label">Phone</div>
                    <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                ${data.address ? `
                <div class="field">
                    <div class="field-label">Address</div>
                    <div class="field-value">${data.address}</div>
                </div>` : ""}
            </div>

            <div class="section">
                <div class="section-title">Employment Details</div>
                <div class="field">
                    <div class="field-label">Position Applied For</div>
                    <div class="field-value">${data.position || "Not specified"}</div>
                </div>
                <div class="field">
                    <div class="field-label">Preferred Location</div>
                    <div class="field-value">${data.preferredLocation || "Not specified"}</div>
                </div>
                <div class="field">
                    <div class="field-label">Availability</div>
                    <div class="field-value">
                        ${data.availability && data.availability.length > 0
                ? data.availability.map((a: string) => `<span class="badge">${a}</span>`).join("")
                : "Not specified"}
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Requirements</div>
                <div class="field">
                    <div class="field-label">Valid Driver's License</div>
                    <div class="field-value">${data.driversLicense || "Not specified"}</div>
                </div>
                <div class="field">
                    <div class="field-label">Years of Driving Experience</div>
                    <div class="field-value">${data.drivingExperience || "Not specified"}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            This application was submitted through the Velvet Valet careers page.
        </div>
    </div>
</body>
</html>`;

        // Send the email via Resend
        const { error } = await resend.emails.send({
            from: "Velvet Valet Website <onboarding@resend.dev>",
            to: "thevelvetvalet@gmail.com",
            replyTo: data.email,
            subject: `New Application: ${data.fullName} — ${data.position || "General"}`,
            html: htmlEmail,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send your application. Please try again or contact us directly." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Career form error:", error);
        return NextResponse.json(
            { error: "Failed to send your application. Please try again or contact us directly." },
            { status: 500 }
        );
    }
}
