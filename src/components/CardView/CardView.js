import './CardView.css';
import ShopCard from "./ShopCard/ShopCard";
import PropTypes from "prop-types";

const CardView = (props) => {
    if (props.products.length === 0) {
        return <p>Ошибка: Данные не переданы</p>
    }

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

CardView.propTypes = {
    products: PropTypes.array.isRequired
}

export default CardView;
