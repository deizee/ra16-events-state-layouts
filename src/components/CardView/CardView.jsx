import './CardView.css';
import ShopCard from "./ShopCard/ShopCard";

const CardView = (props) => {
    return (
        <div className="CardView">
            {props.products.map(product =>
                <ShopCard
                    key={Math.random()}
                    product={product}
                />
            )}
        </div>
    )
}

export default CardView;
