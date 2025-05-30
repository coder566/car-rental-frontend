import Link from "next/link"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {useState} from "react";
import {useRouter} from "next/router";


const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, password}),
            })

            if (response.ok) {
                router.push('/login')
            } else {
                const data = await response.json()
                setError(data.error || 'Произошла ошибка при регистрации')
            }
        } catch (err) {
            setError('Произошла ошибка при подключении к серверу')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <header className="bg-primary text-primary-foreground py-4 px-6">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link href="/home-page" className="text-2xl font-bold" prefetch={false}>
                            Car Rental
                        </Link>
                        <nav>
                            <ul className="flex space-x-4">
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
                                <li>
                                    <Link href="/autorization" prefetch={false}>
                                        Авторизация
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className="bg-muted py-12 px-6">
                        <div className="container mx-auto max-w-md">
                            <h1 className="text-3xl font-bold mb-6">Регистрация</h1>
                            <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
                                <div>
                                    <Label htmlFor="name">Имя</Label>
                                    <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                                           placeholder="Введите ваше имя"/>
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" value={email}
                                           onChange={(e) => setEmail(e.target.value)} placeholder="Введите ваш email"/>
                                </div>
                                <div>
                                    <Label htmlFor="password">Пароль</Label>
                                    <Input id="password" type="password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           placeholder="Введите ваш пароль"/>
                                </div>
                                <div>
                                    <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                                    <Input id="confirmPassword" type="password" value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                           placeholder="Подтвердите ваш пароль"/>
                                </div>
                                {error && <p style={{color: "red"}}>{error}</p>}
                                <Button type="submit" className="w-full">
                                    Зарегистрироваться
                                </Button>
                                <div className="text-center text-muted-foreground">
                                    Уже есть аккаунт?{" "}
                                    <Link href="/autorization" className="underline" prefetch={false}>
                                        Войти
                                    </Link>
                                </div>
                            </form>
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
        </form>
    );
};
export default Registration;