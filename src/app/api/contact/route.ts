import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceInterest: string;
    company: string;
    eventLocation: string;
    locationType: string;
    eventDate: string;
    guestCount: string;
    startTime: string;
    endTime: string;
    howFound: string;
    details: string;
}

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data: ContactFormData = await request.json();

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.phone) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Format the date nicely if provided
        const formattedDate = data.eventDate
            ? new Date(data.eventDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })
            : "Not specified";

        // Format times
        const formatTime = (time: string) => {
            if (!time) return "Not specified";
            const [hours, minutes] = time.split(":");
            const h = parseInt(hours);
            const ampm = h >= 12 ? "PM" : "AM";
            const h12 = h % 12 || 12;
            return `${h12}:${minutes} ${ampm}`;
        };

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
        .footer { background: #f9f9f9; padding: 20px 30px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>VELVET VALET</h1>
            <p>New Inquiry Received</p>
        </div>
        <div class="body">
            <div class="section">
                <div class="section-title">Contact Information</div>
                <div class="field">
                    <div class="field-label">Name</div>
                    <div class="field-value">${data.firstName} ${data.lastName}</div>
                </div>
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                    <div class="field-label">Phone</div>
                    <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                ${data.company ? `
                <div class="field">
                    <div class="field-label">Company / Organization</div>
                    <div class="field-value">${data.company}</div>
                </div>` : ""}
            </div>

            <div class="section">
                <div class="section-title">Service Details</div>
                <div class="field">
                    <div class="field-label">Service Interest</div>
                    <div class="field-value">${data.serviceInterest || "Not specified"}</div>
                </div>
                ${data.eventLocation ? `
                <div class="field">
                    <div class="field-label">Event Location</div>
                    <div class="field-value">${data.eventLocation}</div>
                </div>` : ""}
                ${data.locationType ? `
                <div class="field">
                    <div class="field-label">Type of Location</div>
                    <div class="field-value">${data.locationType}</div>
                </div>` : ""}
            </div>

            <div class="section">
                <div class="section-title">Event Information</div>
                <div class="field">
                    <div class="field-label">Date</div>
                    <div class="field-value">${formattedDate}</div>
                </div>
                <div class="field">
                    <div class="field-label">Time</div>
                    <div class="field-value">${formatTime(data.startTime)} — ${formatTime(data.endTime)}</div>
                </div>
                <div class="field">
                    <div class="field-label">Estimated Guests</div>
                    <div class="field-value">${data.guestCount || "Not specified"}</div>
                </div>
            </div>

            ${data.details ? `
            <div class="section">
                <div class="section-title">Additional Details</div>
                <div class="field-value">${data.details}</div>
            </div>` : ""}

            <div class="section">
                <div class="section-title">Source</div>
                <div class="field">
                    <div class="field-label">How They Found Us</div>
                    <div class="field-value">${data.howFound || "Not specified"}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            This inquiry was submitted through the Velvet Valet website contact form.
        </div>
    </div>
</body>
</html>`;

        // Send the email via Resend
        const { error } = await resend.emails.send({
            from: "Velvet Valet Website <onboarding@resend.dev>",
            to: "thevelvetvalet@gmail.com",
            replyTo: data.email,
            subject: `New Inquiry: ${data.firstName} ${data.lastName} — ${data.serviceInterest || "General"}`,
            html: htmlEmail,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send your message. Please try again or contact us directly." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send your message. Please try again or contact us directly." },
            { status: 500 }
        );
    }
}
