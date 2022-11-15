import React from 'react'
import '../index.css';
import {motion} from 'framer-motion';

function CardItem({urlToImage,author,title,publishedAt}) {
  return (
    <motion.div className='item' style={{background: `url(${urlToImage})`?`url(${urlToImage})`:'#141414'}}>
        <p>{title}</p>

        {/* <img src={urlToImage} alt="" srcset="" /> */}
    </motion.div>
  )
}

export default CardItem