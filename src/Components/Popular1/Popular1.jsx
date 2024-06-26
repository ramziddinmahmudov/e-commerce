import React from 'react'
import './Popular1.css'
import data_product from '../Asset/data1.js'
import Item from '../Item/Item'
const Popular = () => {
    return (
        <div className='popular' data-aos="fade-up">
            <h1>Popular In Nokia</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} color={item.color} ></Item>
                })}
            </div>
        </div>
    )
}

export default Popular
