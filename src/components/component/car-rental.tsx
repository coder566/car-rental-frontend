import Link from "next/link"
import {Label} from "@/components/ui/label"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {Footer} from "@/components/component/footer";

export default function Index() {
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
                                    Регистрация
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-3xl font-bold mb-6">Бронирование автомобиля</h1>
                        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
                            <div>
                                <Label htmlFor="pickup-date">Дата получения</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full flex items-center justify-between">
                                            <span>Выберите дату</span>
                                            <div className={"h-5 w-5"}>
                                                <CalendarIcon/>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0">
                                        <Calendar/>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label htmlFor="return-date">Дата возврата</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full flex items-center justify-between">
                                            <span>Выберите дату</span>
                                            <div className={"h-5 w-5"}>
                                                <CalendarIcon/>
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0">
                                        <Calendar/>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label htmlFor="car-type">Тип автомобиля</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Выберите тип автомобиля"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="compact">Компактный</SelectItem>
                                        <SelectItem value="sedan">Седан</SelectItem>
                                        <SelectItem value="suv">Внедорожник</SelectItem>
                                        <SelectItem value="luxury">Премиум</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="location">Локация</Label>
                                <Input id="location" type="text" placeholder="Введите местоположение"/>
                            </div>
                            <Button type="submit" className="w-full">
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
