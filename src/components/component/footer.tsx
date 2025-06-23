
import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
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
    );
};
