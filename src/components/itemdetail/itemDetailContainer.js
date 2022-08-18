import allProducts from '../../data/data'
import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])

    const { productId } = useParams()
    
    function getProductDetail() {
        return new Promise((resolve, rejected) => {
            let requestedProduct = allProducts.find(prod => prod.id === Number(productId));
            if (requestedProduct === undefined) rejected("Item Not Found")
            else resolve(requestedProduct);
        })
    }

    useEffect(() => {
        getProductDetail()
            .then((result) => setDetail(result))
            .catch((err) => alert(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='container'>
            <ItemDetail
                img={detail.img}
                id={detail.id}
                name={detail.name}
                price={detail.price}
                stock={detail.stock}
                size={detail.size}
                color={detail.color}
                material={detail.material}
                initial={1}
            />
        </div>
    )
}