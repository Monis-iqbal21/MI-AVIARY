import React from 'react'
import '../NewItem'
import dovepic from "../../../images/dovepic.jpeg"

const Item = () => {
    return (
        <div className='new_item_div'>
            <div id='newitem_img'><img src={dovepic} className="img_size_newitem" /></div>
            <div id='newitem_heading'>par Blue<hr className='no_margin_padding' /></div>
            <div id='newitem_price'> price : 20,000/- <br />link</div>
        </div>
    )
}

export default Item