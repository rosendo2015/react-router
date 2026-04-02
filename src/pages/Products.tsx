import { useSearchParams } from "react-router";

export function Products() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <div className="products">
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/products">Products</a>
            </nav>
            <h1>Products</h1>
            {
                category && <p>Categoria: {category}</p>
            }
        </div>
    );
}