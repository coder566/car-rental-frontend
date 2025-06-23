'use client';

import * as React from 'react';
import {FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/component/header";
// import { Footer } from "@/components/component/footer";
import {useAuth} from "@/context/AuthContext";
import {getCurrentSession, setCurrentSession} from "@/lib/get-current-session";

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const {setSession} = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setError('')

        try {
            api.post('/auth/sign-in', {
                email: email,
                password: password
            }).then(response => {
                if (response.status === 200) {
                    setCurrentSession(response.data.token);
                    const session = getCurrentSession();
                    setSession(session);
                    router.replace('/')
                }
            }).catch(reason => {
                console.log(reason)
                setError(reason || 'Неверный email или пароль')
            })
        } catch (err) {
            setError('Произошла ошибка при подключении к серверу')
        }
    };
    return (
        <div>
            <Header/>
            <main className="flex-grow">
                <section className="bg-white py-24 px-6">
                    <div className="container mx-auto max-w-md">
                        <h1 className="text-4xl font-bold mb-4 text-center">Авторизация</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите email"/>
                            </div>
                            <div>
                                <Label htmlFor="password">Пароль</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Введите пароль"/>
                            </div>
                            <Button type="submit" className="w-full">
                                Войти
                            </Button>
                            {error && <p>(error)</p>}
                            <div className="text-center">
                                <Link href="/registration" className="text-primary hover:underline"
                                      prefetch={false}>
                                    Нет аккаунта? Зарегистрироваться
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
               {/* <Footer />*/}
            </main>
        </div>
    )
};