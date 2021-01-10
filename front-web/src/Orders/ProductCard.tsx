import { formatPrice } from "./helpers";
import { Product } from "./types";

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    ifSelected: boolean;
}

function ProductCard({ product, onSelectProduct, ifSelected }: Props) {
    return (
        <div className={`order-card-container ${ifSelected ? 'selected' : ''}`}
        onClick={() => onSelectProduct(product)}>
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price">{formatPrice(product.price)}</h3>
            <div className="order-card-description">
                <h3>{product.description}</h3>
                <p>
                Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                </p>

            </div>
        </div>
    )
}

export default ProductCard;