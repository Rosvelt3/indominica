import Link from "next/link";
import Button from "./Button";

interface NavbarItem {
    text: string;
    route: string;
}

interface NavbarProps {
    items: NavbarItem[]
}

export default function Navbar({items}: NavbarProps) {
    return (
        <nav className="container">
            <div className="flex justify-between items-center py-5">
                <Link href="/"><a className="text-2xl">Indominica</a></Link>
                <div className="flex gap-14">
                    {items.map(item => <Link href={item.route} key={item.route}>{item.text}</Link>)}
                </div>
                <Button>Login</Button>
            </div>
        </nav>
    )
}