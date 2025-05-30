'use client';

import * as React from 'react';
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";

export function AdminHeader() {
    const {logout} = useAuth();
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Car Rental
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/admin/users">
                                Пользователи
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/cars">
                                Машины
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/books">
                                Брони
                            </Link>
                        </li>
                        <li>
                            <Link href="/" onClick={logout}>
                                Выход
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}