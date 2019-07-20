import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    //as chaves depois da vírgula indica que será executado quando o componente estiver montado
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');

        const items = await data.json();
        console.log(items);

        setItems(items.items);
    };

    return (
        <div>
            {
                items.map(item => (
                    <h3 key={item.itemid}>
                        <Link to={`shop/${item.itemid}`}>{item.name}</Link>
                    </h3>
                ))
            }
        </div>
    )
}

export default Shop;