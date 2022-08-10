import { useEffect, useState } from "react"
import allProducts from "../../data/data"
import { Card } from "./Card"
import { SuperCard } from "./SuperCard"

let temp = {
    div: {
        display: "flex",
        justifyContent: "center",
        margin: "auto"
    }
}

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(allProducts), 0)
    })
}
export const CardContainer = () => {
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
                <div className="row d-flex justify-content-around">
                    <SuperCard />
                    {
                        data.map((productDisplay) =>
                            <Card
                                /* col={productDisplay.col} */
                                id={productDisplay.id}
                                key={productDisplay.id}
                                name={productDisplay.name}
                                price={productDisplay.price}
                                img={productDisplay.img}
                            />)
                    }
                </div>
            </div>
        </>
    )
}