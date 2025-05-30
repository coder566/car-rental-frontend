// @flow
import * as React from 'react';
import {useMemo, useState} from 'react';
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


export default function CardCar() {
    const cars = [
        {
            id: 1,
            name: "Toyota Camry",
            brand: "Toyota",
            image: "public/images/toyota-camry.jpg",
            description: "Комфортный седан для деловых поездок",
            features: ["Автоматическая коробка передач", "Кондиционер", "Круиз-контроль"],
            price: 3000,
            available: true,
        },
        {
            id: 2,
            name: "Hyundai Sonata",
            brand: "Hyundai",
            image: "/images/Hyundai-Sonata.png",
            description: "Элегантный и экономичный седан",
            features: ["Автоматическая коробка передач", "Климат-контроль", "Мультимедийная система"],
            price: 2800,
            available: true,
        },
        {
            id: 3,
            name: "Kia Sportage",
            brand: "Kia",
            image: "/images/Kia-Sportage.png",
            description: "Вместительный и проходимый кроссовер",
            features: ["Полный привод", "Камера заднего вида", "Подогрев сидений"],
            price: 4000,
            available: false,
        },
        {
            id: 4,
            name: "Volkswagen Polo",
            brand: "Volkswagen",
            image: "/images/Volkswagen-Polo.png",
            description: "Компактный и экономичный седан",
            features: ["Механическая коробка передач", "Кондиционер", "Bluetooth"],
            price: 2500,
            available: true,
        },
        {
            id: 5,
            name: "Nissan Qashqai",
            brand: "Nissan",
            image: "/images/Nissan-Qashkai.png",
            description: "Стильный и практичный кроссовер",
            features: ["Автоматическая коробка передач", "Парковочные датчики", "Навигационная система"],
            price: 3500,
            available: true,
        },
        {
            id: 6,
            name: "Ford Focus",
            brand: "Ford",
            image: "/images/Ford-Focus.png",
            description: "Надежный и динамичный хэтчбек",
            features: ["Механическая коробка передач", "Кондиционер", "Мультируль"],
            price: 2700,
            available: false,
        },
    ]
    const [filters, setFilters] = useState({
        brand: [''],
        price: [0, 5000],
        available: true,
    })
    const handleFilterChange = (type: any, value: any) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [type]: value,
        }))
    }
    const filteredCars = useMemo(() => {
        return cars.filter((car) => {
            if (filters.brand.length > 0 && !filters.brand.includes(car.brand)) {
                return false
            }
            if (car.price < filters.price[0] || car.price > filters.price[1]) {
                return false
            }
            return !(filters.available && !car.available);

        })
    }, [filters, cars])
    return (
        <div>
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/home-page" className="text-2xl font-bold" prefetch={false}>
                        Car Rental
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/home-page" prefetch={false}>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link href="/src/app/profile" prefetch={false}>
                                    Профиль
                                </Link>
                            </li>
                            <li>
                                <Link href="#" prefetch={false}>
                                    Каталог
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" prefetch={false}>
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" prefetch={false}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Популярные модели</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredCars.slice(0, 4).map((car) => (
                                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src="/public/images/"
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
                                            <Link href="/car-rental">
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
                            <div className="flex space-x-4">
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
                                                checked={filters.brand.includes(brand)}
                                                onCheckedChange={(checked) =>
                                                    handleFilterChange(
                                                        "brand",
                                                        checked ? [...filters.brand, brand] : filters.brand.filter((b) => b !== brand),
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
                                <Checkbox
                                    checked={filters.available}
                                    onCheckedChange={(checked) => handleFilterChange("available", checked)}
                                >
                                    Только в наличии
                                </Checkbox>
                            </div>
                            <div>
                                <Input placeholder="Поиск по названию..."
                                       className="border border-muted rounded-md px-4 py-2"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredCars.map((car) => (
                                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src="/public/images/"
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
                                            <Button>Забронировать</Button>
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