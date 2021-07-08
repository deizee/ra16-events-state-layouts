import './ListView.css';
import ShopItem from "./ShopItem/ShopItem";
import PropTypes from "prop-types";

const ListView = (props) => {
    if (props.products.length === 0) {
        return <p>Ошибка: Данные не переданы</p>
    }

    return (
        <div className="ListView">
            {props.products.map(product =>
                <ShopItem
                    key={Math.random()}
                    product={product}
                />
            )}
        </div>
    )
}

ListView.propTypes = {
    products: PropTypes.array.isRequired
}

export default ListView;
