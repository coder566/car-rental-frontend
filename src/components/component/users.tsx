import Link from "next/link"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Button} from "@/components/ui/button";
import React from "react";

export default function Users() {
    return (
        <div>
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="#" className="text-2xl font-bold" prefetch={false}>
                        Car Rental
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" prefetch={false}>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    Каталог
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    Профиль
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
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
                                    <h2 className="text-xl font-bold">Иван Иванов</h2>
                                    <p className="text-muted-foreground">ivan@example.com</p>
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
                                            <TableCell>Honda Civic</TableCell>
                                            <TableCell>$40</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-02-10</TableCell>
                                            <TableCell>Ford Mustang</TableCell>
                                            <TableCell>$60</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Штрафы</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Дата</TableHead>
                                            <TableHead>Причина</TableHead>
                                            <TableHead>Сумма</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>2023-04-01</TableCell>
                                            <TableCell>Превышение скорости</TableCell>
                                            <TableCell>$100</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2023-02-28</TableCell>
                                            <TableCell>Парковка в неположенном месте</TableCell>
                                            <TableCell>$50</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            <Button variant="red" className="w-full">
                                Выйти из аккаунта
                            </Button>
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
    )
}
