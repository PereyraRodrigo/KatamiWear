import allProducts from '../../data/data'
import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'

function getProductDetail() {
    return new Promise((res, rej) => {
        setTimeout(() => res(allProducts[5]), 2000)
    })
}

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    useEffect(() => {
        getProductDetail().then((result) => {
            setDetail(result);
        })
    }, []
    )
    return (
        <div className='container'>
            <ItemDetail img={detail.img}
                id={detail.id}
                name={detail.name}
                price={detail.price}
                size={detail.size}
                color={detail.color}
                material={detail.material} />
        </div>
    )
}