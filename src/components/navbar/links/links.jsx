import Link from "next/link"

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Sobre nós",
            path: "/sobre-nos",
        },
        {
            title: "Veiculos",
            path: "/veiculos",
        }
    ];

    return (
        <div>
            {links.map((link) => (
                <Link key={link.title} href={link.path}>{link.title}</Link>
            ))}
        </div>
    )
}

export default Links