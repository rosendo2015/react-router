import { useParams } from "react-router";


export function Details() {
    const { id } = useParams();
    return (
        <div className="details">
            <h1>Details</h1>
            <p>ID: {id}</p>
        </div>
    );
}