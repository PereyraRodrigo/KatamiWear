import img1 from '../../media/pic3.jpg'
import { AddToBagBlock } from './AddToBagBlock'
export const ProductPage = () => {    
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 prodPage__blockImg">
                    <img src={img1} alt="Katami Pic" />
                </div>
                <div className="col-6 prodPage__blockInfo">
                    <div>
                        <p className="prodPage__name">Hakama 2.0</p>
                        <p className="prodPage__price">$8200</p>
                    </div>
                    <p className="prodPage__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde aliquid sint, distinctio quibusdam id eius facilis harum voluptatum quasi iusto fugiat repellat eos. Odit nulla amet voluptas maiores molestias?
                    Sed illo unde officiis ipsam dignissimos pariatur et, minima natus numquam nesciunt quo porro itaque rem incidunt architecto perferendis omnis ipsa magni cum obcaecati culpa, similique quae voluptatum. Rem, iure!</p>
                    <AddToBagBlock />
                </div>
            </div>
        </div>
    )
}