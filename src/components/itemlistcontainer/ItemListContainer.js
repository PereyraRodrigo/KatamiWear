/* import { useEffect, useState } from "react" */
import { useEffect, useState } from "react"
import { ItemCount } from "../itemcount/ItemCount"
import allProducts from "../../data/data"

let temp = {
    div: {
        display: "flex",
        justifyContent: "center",
        margin: "auto"
    }
}
/* import pic3 from "../../media/pic3.jpg"
import pic4 from '../../media/pic4.jpg'
import pic5 from '../../media/pic5.jpg'

const data = [
    { id: 1, name: "Shirt", description: "Size XL", image: pic5 ,stock: 5 },
    { id: 2, name: "Shirt 2", description: "Size S", image: pic4 ,stock: 3 },
    { id: 3, name: "Shirt 3", description: "Size L", image: pic3 ,stock: 8 }
]; */

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(allProducts), 2000) 
    })
}
export const ItemListContainer = () => {

    /* const [productos, setProductos] = useState(null);
    
    useEffect(() => {

        const promiseTryOut = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 0);
        });

        promiseTryOut
        .then(
            (res) => {
                console.log(res);
                setProductos(res)
            },
            (err) => {
            console.log("resuelto MAL");
            }
        )
        .catch((err) => {
            console.log(err + "RE MAL");
        });
    }, []); */
    
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        })
    }, []
    )
    return (
        <>
            <div style={temp.div} className="container">
                <div className="row">
                    {
                        data.map((productDisplay) =>
                            <ItemCount
                                key={productDisplay.id}
                                name={productDisplay.name}
                                price={productDisplay.price}
                                img={productDisplay.img}
                                stock={productDisplay.stock}
                                initial={productDisplay.initial}
                            />)
                    }
                </div>
            </div>
        </>
    )
}