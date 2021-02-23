import React from 'react'

function NewArrivalItem({ id, name, imageUrl, price, types, sizes, onClickAddFlower, addedCount }) {

    const onAddFlower = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
        };
        onClickAddFlower(obj)
    }

    return (
        <div className="product">
            <div className="product__previev">
                <img src={imageUrl} alt="" />
                <div className="product__discount">
                    <p>10%</p>
                </div>
                <div className="product__add-to-cart">
                    <button onClick={onAddFlower} >Добавить в корзину {addedCount}</button>
                </div>
            </div>
            <div className="product__namePrice">
                <div className="product__name">
                    <p>{name}</p>
                </div>
                <div className="product__price">
                    <p>{price} <span className="rub">i</span></p>
                </div>
            </div>
        </div>
    )
}

export default NewArrivalItem
