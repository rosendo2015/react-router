import { useNavigate } from "react-router";
export function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/products">Products</a>
                <a href="/products?category=electronics">Categorias</a>
                <button type="button" onClick={() => navigate("/products")}>Ver produtos</button>

            </nav>
            <h1>Home</h1>
        </div>
    );
}