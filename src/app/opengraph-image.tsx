import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Velvet Valet — Premium Valet Services in Toronto & GTA";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0b0b0f",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px",
                }}
            >
                {/* Subtle border frame */}
                <div
                    style={{
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                        right: "24px",
                        bottom: "24px",
                        border: "1px solid rgba(201, 169, 110, 0.25)",
                        display: "flex",
                    }}
                />

                {/* Gold accent line top */}
                <div
                    style={{
                        width: "80px",
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
                        marginBottom: "40px",
                        display: "flex",
                    }}
                />

                {/* Brand name */}
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "0.06em",
                        marginBottom: "16px",
                        fontFamily: "serif",
                        display: "flex",
                    }}
                >
                    The Velvet Valet
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: "200px",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
                        margin: "24px 0",
                        display: "flex",
                    }}
                />

                {/* Tagline */}
                <div
                    style={{
                        fontSize: "22px",
                        color: "#c9a96e",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase" as const,
                        fontWeight: 400,
                        marginBottom: "12px",
                        display: "flex",
                    }}
                >
                    Premium Valet Services
                </div>

                {/* Location */}
                <div
                    style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.45)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase" as const,
                        display: "flex",
                    }}
                >
                    Toronto & Greater Toronto Area
                </div>

                {/* Gold accent line bottom */}
                <div
                    style={{
                        width: "80px",
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
                        marginTop: "40px",
                        display: "flex",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
