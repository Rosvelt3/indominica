import Link from "next/link";

interface ButtonProps {
    children: string;
}

export default function Button({children}: ButtonProps) {
    return (
        <button className="bg-primary py-3 px-5 rounded-lg text-white">
            {children}
        </button>
    )
}