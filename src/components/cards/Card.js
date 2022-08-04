export const Card = ({id,name,price,img}) => {
    return (
        <div className="col-3">
            <div className='card__container'>
                <a href="index.html">
                    <img className='card__img' src={img} id={id} alt="Katami Product" />
                </a>
                <div className='card__info'>
                    <div>
                        <p className='card__name'>{name}</p>
                        <p className='card__price'>${price}</p>
                    </div>
                    <a href="index.html">
                        <p className='card__show'>Show →</p>
                    </a>
                </div>
            </div>
        </div>
    )
}