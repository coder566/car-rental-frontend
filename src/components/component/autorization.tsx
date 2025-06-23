
import Link from "next/link"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Footer} from "@/components/component/footer"
import {Button} from "@/components/ui/button"

export default function autorization() {
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
                                <Link href="/main" prefetch={false}>
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
                <section className="bg-white py-24 px-6">
                    <div className="container mx-auto max-w-md">
                        <h1 className="text-4xl font-bold mb-4 text-center">Авторизация</h1>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Введите email"/>
                            </div>
                            <div>
                                <Label htmlFor="password">Пароль</Label>
                                <Input id="password" type="password" placeholder="Введите пароль"/>
                            </div>
                            <Button type="submit" className="w-full">
                                Войти
                            </Button>
                            <div className="text-center">
                                <Link href="/registration" className="text-primary hover:underline" prefetch={false}>
                                    Нет аккаунта? Зарегистрироваться
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
              <Footer />
            </main>
        </div>
    )
}
