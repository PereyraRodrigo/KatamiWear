import { Link } from 'react-router-dom';
export const Card = ({ id, name, price, img }) => {
    return (
        <div className="col-3">
            <div className='card__container'>
                <Link to={`/Women/${id}`}>
                    <img className='card__img' src={img} key={price} alt={name} />
                </Link>
                <div className='card__info'>
                    <div>
                        <p className='card__name'>{name}</p>
                        <p className='card__price'>${price}</p>
                    </div>
                    <Link to={`/Women/${id}`}>
                        <p className='card__show'>Show →</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}