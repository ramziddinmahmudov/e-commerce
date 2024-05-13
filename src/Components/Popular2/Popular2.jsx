import React from 'react'
import './Popular2.css'
import data_product from '../Asset/data2.js'
import Item from '../Item/Item'
import Like2 from "../like and dislike q/like1.jsx"
const Popular = () => {
    return (
        <div className='popular'>
            <h1>Popular In Samsung</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} color={item.color}></Item>
                })}
            </div>
            <div className='salom1'>
                <Like2/>
                <Like2/>
                <Like2/>
                <Like2/>
            </div>
        </div>
    )
}

export default Popular
