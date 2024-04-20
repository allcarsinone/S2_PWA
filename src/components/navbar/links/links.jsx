import Link from "next/link";

const Links = () => {
    const links = [
        {
            name: "Home",
            href: "/"
        }, 
        {
            name: "Sobre nós",
            href: "/sobre-nos"
        },
        {
            name: "veiculos",
            href: "/veiculos"
        },
        {
            name: "admin",
            href: "/admin"
        }
    ];

    return (
        <div>
            {links.map((link) => (
                <Link href={link.href} key={link.name}>{link.name}</Link>
            ))}
        </div>
    )
}

export default Links