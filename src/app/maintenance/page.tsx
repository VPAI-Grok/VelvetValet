import React from 'react';

export const metadata = {
    title: "Under Maintenance",
    description: "The Velvet Valet is currently undergoing scheduled maintenance.",
};

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                <h1 className="text-5xl md:text-6xl text-primary mb-4 font-script">
                    The Velvet Valet
                </h1>

                <div className="w-24 h-[1px] bg-primary/50 mx-auto my-8"></div>

                <h2 className="text-3xl font-playfair mb-4">
                    Under Maintenance
                </h2>

                <p className="text-foreground/80 font-lato text-lg">
                    We are currently updating our website to provide you with an even better experience. We apologize for any inconvenience.
                </p>

                <p className="text-foreground/60 font-lato mt-8">
                    Please check back soon.
                </p>
            </div>
        </div>
    );
}
