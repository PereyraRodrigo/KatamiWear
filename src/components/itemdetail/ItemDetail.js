import { AddToBagBlock } from "./AddToBagBlock"
export const ItemDetail = ({img,name,price,id,material,size,color}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 itemDetail__blockImg">
                    <img src={img} id={id} alt="Katami Pic" />
                </div>
                <div className="col-6 itemDetail__blockInfo">
                    <div>
                        <p className="itemDetail__name">{name}</p>
                        <p className="itemDetail__price">${price}</p>
                    </div>
                    <p className="itemDetail__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde aliquid sint, distinctio quibusdam id eius facilis harum voluptatum quasi iusto fugiat repellat eos. Odit nulla amet voluptas maiores molestias?
                        Sed illo unde officiis ipsam dignissimos pariatur et, minima natus numquam nesciunt quo porro itaque rem incidunt architecto perferendis omnis ipsa magni cum obcaecati culpa, similique quae voluptatum. Rem, iure!</p>
                    <AddToBagBlock
                        material={material}
                        size={size}
                        color={color}
                    />
                </div>
            </div>
        </div>
    )
}