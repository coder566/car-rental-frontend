import * as React from 'react';
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/component/header";

export default function Page() {
    return (
        <div>
            <Header/>
            <main>
                <section className="bg-white py-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">О нас</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p>
                                    Мы - компания Car Rental, предоставляющая услуги по аренде автомобилей по всей
                                    России.
                                    Наша миссия - сделать аренду автомобилей максимально удобной и доступной для наших
                                    клиентов.
                                </p>
                                <p className="mt-4">
                                    Мы гордимся нашим парком автомобилей, который включает в себя только надежные и
                                    современные модели от
                                    ведущих производителей. Наши автомобили регулярно обслуживаются и проходят
                                    тщательную проверку, чтобы
                                    обеспечить безопасность и комфорт наших клиентов.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Мы стремимся предоставлять высококачественный сервис на всех этапах взаимодействия с
                                    нашими клиентами
                                    - от бронирования до возврата автомобиля. Наша команда профессионалов всегда готова
                                    помочь вам с
                                    выбором подходящего автомобиля и ответить на любые ваши вопросы.
                                </p>
                                <p className="mt-4">
                                    Мы верим, что аренда автомобиля должна быть простой, удобной и доступной для
                                    каждого. Поэтому мы
                                    постоянно работаем над улучшением наших услуг и расширением нашего предложения,
                                    чтобы соответствовать
                                    ожиданиям наших клиентов.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Контакты</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Наши контакты</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <div className="mr-2 h-5 w-5 text-muted-foreground">
                                            <PhoneIcon/>
                                        </div>
                                        +7 (123) 456-78-90
                                    </li>
                                    <li>
                                        <div className="mr-2 h-5 w-5 text-muted-foreground">
                                            <MailIcon/>
                                        </div>
                                        info@carental.ru
                                    </li>
                                    <li>
                                        <div className="mr-2 h-5 w-5 text-muted-foreground">
                                            <MapPinIcon/>
                                        </div>
                                        Москва, ул. Пушкина, д. 10
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Обратная связь</h3>
                                <form>
                                    <div className="mb-4">
                                        <Label htmlFor="name">Имя</Label>
                                        <Input id="name" type="text" placeholder="Введите ваше имя"/>
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Введите ваш email"/>
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="message">Сообщение</Label>
                                        <Textarea id="message" rows={4} placeholder="Введите ваше сообщение"/>
                                    </div>
                                    <Button type="submit">Отправить</Button>
                                </form>
                            </div>
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

function ChevronDownIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6"/>
        </svg>
    )
}


function MailIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    )
}


function MapPinIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    )
}


function PhoneIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    )
}