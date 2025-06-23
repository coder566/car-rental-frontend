import { Nunito } from 'next/font/google';
import './globals.scss';
import React from "react";
import { AuthProvider } from "@/context/AuthContext";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body className={`${nunito.className} h-full m-0 p-0`}>
        <AuthProvider>
            <div className="flex flex-col min-h-screen">
                {children}
            </div>
        </AuthProvider>
        </body>
        </html>
    );
}
