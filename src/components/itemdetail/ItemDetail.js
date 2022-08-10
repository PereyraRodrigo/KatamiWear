import { AddToBagBlock } from "./AddToBagBlock"
import { Link,useParams } from "react-router-dom"
import allProducts from "../../data/data"

export const ItemDetail = (/* {img,name,price,id,material,size,color} */) => {
    const { productId } = useParams()
    const thisProduct = allProducts.find(prod => prod.id == productId)
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 itemDetail__blockImg">
                    <Link to={`/Women`}> Go Back </Link>
                    <img className="itemDetail__img" src={thisProduct.img} id={thisProduct.id} alt="Katami Pic" />
                </div>
                <div className="col-6 itemDetail__blockInfo">
                    <div>
                        <p className="itemDetail__name">{thisProduct.name}</p>
                        <p className="itemDetail__price">${thisProduct.price}</p>
                    </div>
                    <p className="itemDetail__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde aliquid sint, distinctio quibusdam id eius facilis harum voluptatum quasi iusto fugiat repellat eos. Odit nulla amet voluptas maiores molestias?
                        Sed illo unde officiis ipsam dignissimos pariatur et, minima natus numquam nesciunt quo porro itaque rem incidunt architecto perferendis omnis ipsa magni cum obcaecati culpa, similique quae voluptatum. Rem, iure!</p>
                    <AddToBagBlock
                        material={thisProduct.material}
                        size={thisProduct.size}
                        color={thisProduct.color}
                    />
                </div>
            </div>
        </div>
    )
}