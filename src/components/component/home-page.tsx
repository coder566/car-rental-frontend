import Link from "next/link"

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="#" className="text-2xl font-bold" prefetch={false}>
                        Car Rental
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/registration" prefetch={false}>
                                    Зарегистрироваться
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow">
                <section className="bg-white py-24 px-6">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в Car Rental!</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Мы рады предложить вам широкий выбор автомобилей для аренды по всей России.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link
                                href="/main"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}>
                                Посмотреть каталог
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md border border-muted px-6 py-3 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}>
                                Узнать о нас
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            {/*<div className="min-h-screen flex flex-col">*/}
            {/*  <footer className="bg-primary text-primary-foreground p-4 mt-auto">*/}
            {/*    <div className="container mt-auto flex justify-between items-center">*/}
            {/*      <p>&copy; 2023 Car Rental. Все права защищены.</p>*/}
            {/*      <nav>*/}
            {/*        <ul className="flex space-x-8">*/}
            {/*          <li>*/}
            {/*            <Link href="#" prefetch={true}>*/}
            {/*              Условия использования*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#" prefetch={false}>*/}
            {/*              Политика конфиденциальности*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </nav>*/}
            {/*    </div>*/}
            {/*  </footer>*/}
            {/*</div>*/}
        </div>
    )
}
