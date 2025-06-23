'use client';

import * as React from 'react';
import {use, useEffect, useState} from 'react';
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import DatePicker from "react-datepicker";
import {Header} from "@/components/component/header";
import "react-datepicker/dist/react-datepicker.css";
import {Car} from "@/types/car";
import api from "@/lib/api";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import {Footer} from "@/components/component/footer";

export default function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = use(params);
    const {session} = useAuth();

    const [car, setCar] = useState<Car>();

    useEffect(() => {
        api.get(`/cars/${id}`).then(response => {
            if (response.status === 200) {
                setCar(response.data);
            }
        });
    }, []);

    const [pickupDate, setPickupDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);

    const router = useRouter();
    const bookCar = (id?: number) => {
        api.post(`/cars/${id}/book`, {
            userId: session?.id,
            startTime: pickupDate?.getTime(),
            endTime: returnDate?.getTime(),
        }).then(response => {
            if (response.status === 200) {
                router.replace("/profile")
            }
        });
    }

    return (
        <div>
            <Header/>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-3xl font-bold mb-6">Бронирование автомобиля</h1>
                        <form className="bg-white rounded-lg shadow-md p-6 space-y-4" onSubmit={e => e.preventDefault()}>
                            <div>
                                <Label htmlFor="pickup-date">Дата получения</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full flex items-center justify-between">
                                            <span>{pickupDate ? pickupDate.toLocaleDateString() : "Выберите дату"}</span>
                                            <div className={"h-5 w-5"}>
                                                <CalendarIcon/>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0">
                                        <DatePicker
                                            selected={pickupDate}
                                            onChange={(date: Date | null) => setPickupDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="w-full border p-2"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label htmlFor="return-date">Дата возврата</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full flex items-center justify-between">
                                            <span>{returnDate ? returnDate.toLocaleDateString() : "Выберите дату"}</span>
                                            <div className={"h-5 w-5"}>
                                                <CalendarIcon/>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0">
                                        <DatePicker
                                            selected={returnDate}
                                            onChange={(date: Date | null) => setReturnDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="w-full border p-2"/>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label htmlFor="car-type">Тип автомобиля</Label>
                                <div
                                    className={'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'}>
                                    {car?.type}
                                </div>
                            </div>
                            <Button type="submit" className="w-full" onClick={() => bookCar(car?.id)}>
                                Забронировать
                            </Button>
                        </form>
                    </div>
                </section>
            </main>
            {/*<footer className="bg-primary text-primary-foreground py-4 px-6">*/}
            {/*    <div className="container mx-auto flex justify-between items-center">*/}
            {/*        <p>&copy; 2023 Car Rental. Все права защищены.</p>*/}
            {/*        <nav>*/}
            {/*            <ul className="flex space-x-4">*/}
            {/*                <li>*/}
            {/*                    <Link href="#" prefetch={false}>*/}
            {/*                        Условия использования*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link href="#" prefetch={false}>*/}
            {/*                        Политика конфиденциальности*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</footer>*/}
            <Footer />
        </div>
    )
}

function CalendarIcon() {
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
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
        </svg>
    )
}