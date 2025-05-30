'use client';

import React, {Suspense} from "react";
import Error from "next/error";
import {useAuth} from "@/context/AuthContext";
import {Role} from "@/types/user";
import {AdminHeader} from "@/components/component/admin-header";

export default function RootLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    const {session} = useAuth();
    return (
        <main className="min-h-screen">
            <Suspense>
                {!session && <Error statusCode={404}/>}
                {session && session.role === Role.ADMIN && (<><AdminHeader/> {children}</>)}
            </Suspense>
        </main>
    );
}
