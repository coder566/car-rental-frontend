'use client';

import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {Header} from "@/components/component/header";
import {useAuth} from "@/context/AuthContext";
import api from "@/lib/api";
import {User} from "@/types/user";

export default function Page() {
    const {session, logout} = useAuth();

    const [user, setUser] = useState<User>();
    useEffect(() => {
        api.get(`/users/${session?.id}`).then(response => {
            if (response.status === 200) {
                setUser(response.data);
            }
        });
    }, []);
    return (
        <div>
            <Header/>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-3xl font-bold mb-6">Профиль пользователя</h1>
                        <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
                            <div className="flex items-center space-x-4">
                                <Avatar className="w-16 h-16 rounded-full">
                                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar"/>
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className="text-xl font-bold">{user?.firstName}</h2>
                                    <p className="text-muted-foreground">{user?.email}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">История поездок</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Дата</TableHead>
                                            <TableHead>Автомобиль</TableHead>
                                            <TableHead>Стоимость</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>2023-04-15</TableCell>
                                            <TableCell>Toyota Camry</TableCell>
                                            <TableCell>$50</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-03-20</TableCell>
                                            <TableCell>Hyundai Sonata</TableCell>
                                            <TableCell>$40</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-02-10</TableCell>
                                            <TableCell>Ford Focus</TableCell>
                                            <TableCell>$60</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Забронированные автомобили</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Дата начала</TableHead>
                                            <TableHead>Дата окончания</TableHead>
                                            <TableHead>Модель автомобиля</TableHead>
                                            <TableHead>Стоимость</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {user?.bookedCars.map(car => {
                                            return (
                                                <TableRow key={car.id}>
                                                    <TableCell>{new Date(car.startDate).toLocaleDateString("ru-RU")}</TableCell>
                                                    <TableCell>{new Date(car.endDate).toLocaleDateString("ru-RU")}</TableCell>
                                                    <TableCell>{car.car.name}</TableCell>
                                                    <TableCell>{car.car.price}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>

                                </Table>
                            </div>
                            <Link href={'/'} onClick={logout}>
                                <Button variant="red" className="w-full">
                                    Выйти из аккаунта
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-primary text-primary-foreground py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <p>&copy; 2023 Car Rental. Все права защищены.</p>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" prefetch={false}>
                                    Условия использования
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    Политика конфиденциальности
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}