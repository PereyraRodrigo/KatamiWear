import img from '../../media/pic10.jpg'
import {Link} from 'react-router-dom'
export const SuperCard = () => {
    const id = 6;
    //hardcodeada
    return (
        <div className="col-6">
            <div className='card__container card__container--superCard'>
                <Link to={`/Women/${id}`}>
                    <img className='card__img card__img--superCard' src={img} alt="Katami Product" />
                </Link>
                <div className='card__info'>
                    <div>
                        <p className='card__name'>Top Ropes Indigo</p>
                        <p className='card__price'>$240</p>
                    </div>
                    <Link to={`/Women/${id}`}>
                        <p className='card__show'>Show →</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}