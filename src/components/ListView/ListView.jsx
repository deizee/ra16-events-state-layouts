import './ListView.css';
import ShopItem from "./ShopItem/ShopItem";

const ListView = (props) => {
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

export default ListView;
