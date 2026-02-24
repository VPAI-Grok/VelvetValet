import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "The Velvet Valet",
        short_name: "Velvet Valet",
        description: "Premium valet services for luxury events, hotels, and private residences.",
        start_url: "/",
        display: "standalone",
        background_color: "#0b0b0f",
        theme_color: "#D4AF37",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
