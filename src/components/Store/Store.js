import { useState } from 'react';
import './Store.css';
import IconSwitch from "../IconSwitch/IconSwitch";
import ListView from "../ListView/ListView";
import CardView from "../CardView/CardView";

const fakeData = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

const Store = (props) => {
    const [products, setProducts] = useState(fakeData);
    const [isListView, setIsListView] = useState(false);

    const onSwitchListHandler = () => {
        setIsListView(!isListView);
    }

    return (
        <div className="Store">
            <IconSwitch icon={isListView ? 'view_module' : 'view_list'} onSwitch={onSwitchListHandler} />
            {isListView ? <ListView products={products} /> : <CardView products={products} />}
        </div>
    )
}

export default Store;
