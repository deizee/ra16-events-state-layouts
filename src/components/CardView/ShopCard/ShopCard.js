import './ShopCard.css';
import Button from "../../UI/Button";
import PropTypes from "prop-types";

const ShopCard = (props) => {
    const {name, price, color, img} = props.product;

    return (
        <div className="ShopCard">
            <h1 className="ShopCard_title">{name}</h1>
            <h2 className="ShopCard_color">{color}</h2>
            <div className="ShopCard_image-container">
                <img className="ShopCard_image" src={img} alt={name} />
            </div>
            <div className="ShopCard_footer">
                <div className="ShopCard_price">${price}</div>
                <Button title="add to cart" />
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ShopCard;
