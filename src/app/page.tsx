'use client';

import React, {useEffect, useMemo, useState} from "react";
import api from "@/lib/api";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Slider} from "@/components/ui/slider";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Header} from "@/components/component/header";
import {Car} from "@/types/car";

type Filter = {
    brands: string[];
    price: number[];
    onlyAvailable: boolean;
    name: string;
}

export default function Main() {
    const [cars, setCars] = useState<Car[]>([]);
    useEffect(() => {
        api.get('/cars').then(response => {
            if (response.status === 200) {
                setCars(response.data)
            }
        }).catch(reason => {
            console.log(reason)
        });
    }, []);

    const popularCars = cars.slice(0, 4);

    const [filters, setFilters] = useState<Filter>({
        brands: [],
        price: [0, 5000],
        onlyAvailable: false,
        name: ''
    })
    const handleFilterChange = (type: any, value: any) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value,
        }))
    }
    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            if (filters.name && !car.name.toLowerCase().includes(filters.name.toLowerCase())) {
                return false;
            }

            if (filters.brands.length > 0 && !filters.brands.includes(car.brand)) {
                return false;
            }

            if (car.price < filters.price[0] || car.price > filters.price[1]) {
                return false;
            }
            return !(filters.onlyAvailable && !car.available);

        })
    }, [filters, cars]);
    return (
        <div>
            <Header/>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Популярные модели</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {popularCars.map((car) => (
                                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                        style={{aspectRatio: "300/200", objectFit: "cover"}}
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                                        <p className="text-muted-foreground mb-4">{car.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-bold">{car.price} ₽/сутки</p>
                                                {car.available ? (
                                                    <p className="text-green-500">В наличии</p>
                                                ) : (
                                                    <p className="text-red-500">Нет в наличии</p>
                                                )}
                                            </div>
                                            <Link href={`/car-rental/${car.id}`}>
                                                <Button>Забронировать</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-white py-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Каталог автомобилей</h2>
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-4 items-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            Фильтр по марке
                                            <div className={'ml-2 h-4 w-4'}>
                                                <ChevronDownIcon/>
                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {["Toyota", "Hyundai", "Kia", "Volkswagen", "Nissan", "Ford"].map((brand) => (
                                            <DropdownMenuCheckboxItem
                                                key={brand}
                                                checked={filters.brands.includes(brand)}
                                                onCheckedChange={(checked) =>
                                                    handleFilterChange(
                                                        "brands",
                                                        checked ? [...filters.brands, brand] : filters.brands.filter((b) => b !== brand),
                                                    )
                                                }
                                            >
                                                {brand}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            Фильтр по цене
                                            <div className={'ml-2 h-4 w-4'}>
                                                <ChevronDownIcon/>
                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <Slider
                                            min={0}
                                            max={5000}
                                            step={500}
                                            value={filters.price}
                                            onValueChange={(value) => handleFilterChange("price", value)}
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>0 ₽</span>
                                            <span>5000 ₽</span>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className={'flex gap-2 items-center'}>
                                    <Checkbox
                                        checked={filters.onlyAvailable}
                                        onCheckedChange={(checked) => handleFilterChange("onlyAvailable", checked)}
                                    />
                                    <p>Только в наличии</p>
                                </div>
                            </div>
                            <div>
                                <Input placeholder="Поиск по названию..."
                                       className="border border-muted rounded-md px-4 py-2"
                                       type={'text'}
                                       value={filters.name}
                                       onChange={event => handleFilterChange("name", event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredCars.map((car) => (
                                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                        style={{aspectRatio: "300/200", objectFit: "cover"}}
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                                        <p className="text-muted-foreground mb-4">{car.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-bold">{car.price} ₽/сутки</p>
                                                {car.available ? (
                                                    <p className="text-green-500">В наличии</p>
                                                ) : (
                                                    <p className="text-red-500">Нет в наличии</p>
                                                )}
                                            </div>
                                            <Link href={`/car-rental/${car.id}`}>
                                                <Button>Забронировать</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                        <div className={'mr-2 h-5 w-5 text-muted-foreground'}>
                                            <PhoneIcon/>
                                        </div>
                                        +7 (123) 456-78-90
                                    </li>
                                    <li>
                                        <div className={'mr-2 h-5 w-5 text-muted-foreground'}>
                                            <MailIcon/>
                                        </div>
                                        info@carental.ru
                                    </li>
                                    <li>
                                        <div className={'mr-2 h-5 w-5 text-muted-foreground'}>
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
    );
};


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