import './ShopItem.css';
import Button from "../../UI/Button";

const ShopItem = (props) => {
    const {name, price, color, img} = props.product;

    return (
        <div className="ShopItem">
            <div className="ShopItem_image-container">
                <img className="ShopItem_image-image" src={img} alt=""/>
            </div>
            <h1 className="shopItem_image-title">{name}</h1>
            <h2 className="ShopItem_image-color">{color}</h2>
            <div className="ShopItem_image-price">${price}</div>
            <Button title="add to cart"/>
        </div>
    )
}

export default ShopItem;
