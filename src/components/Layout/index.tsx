import "./styles.css"
import { Outlet, useNavigate } from "react-router"

export function Layout() {
    const navigate = useNavigate();
    return (
        <div className="layout">
            <header className="users">
                <p>Olá, Rosendo.</p>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/products">Products</a>
                    <a href="/products?category=electronics">Categorias</a>
                    <button type="button" onClick={() => navigate("/products")}>Ver produtos</button>

                </nav>
            </header>
            <Outlet />
            <footer>
                <span>Copyright © 2026 - Todos os direitos reservados.</span>
            </footer>
        </div>
    )
}