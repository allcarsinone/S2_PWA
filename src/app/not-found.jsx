import Link from "next/link"

const NotFound = () => {

    return (
        <div>
            <h1>Página não encontrada</h1>
            <Link href="/">Voltar à página inicial</Link>
        </div>
    )
}

export default NotFound