import { useEffect, useState } from "react"
import { ItemCount } from "./ItemCount"
import allProducts from "../../data/data"

let temp = {
    div: {
        display: "flex",
        justifyContent: "center",
        margin: "auto"
    }
}

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(allProducts), 0) 
    })
}
export const ItemListContainer = () => { 

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