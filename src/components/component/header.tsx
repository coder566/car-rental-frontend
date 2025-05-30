'use client';

import * as React from 'react';
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";
import {Role} from "@/types/user";

export function Header() {
    const {session} = useAuth();
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Car Rental
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                Главная
                            </Link>
                        </li>
                        {session && session.role === Role.ADMIN && (
                            <li>
                                <Link href="/admin/users">
                                    Админ-панель
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link href="/">
                                Каталог
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Контакты
                            </Link>
                        </li>
                        {session && (
                            <li>
                                <Link href="/profile">
                                    Профиль
                                </Link>
                            </li>
                        )}
                        {!session && (
                            <li>
                                <Link href="/autorization">
                                    Вход
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}