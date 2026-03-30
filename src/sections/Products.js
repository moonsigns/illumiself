import products from "../img/product_pictures.png";
import FeatherIcon from "feather-icons-react";

export default function ProductFormulation() {
    return (
        <div className="products">

            <h2 style={{marginBottom:"60px", marginTop:"20px"}}>Produtos</h2>

            <img src={products} alt="Produtos" className="products-image" />

        </div>
    );
}