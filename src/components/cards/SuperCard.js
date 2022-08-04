import img from '../../media/pic10.jpg'
export const SuperCard = () => {
    return (
        <div className="col-6">
            <div className='card__container card__container--superCard'>
                <a href="index.html">
                    <img className='card__img card__img--superCard' src={img} alt="Katami Product" />
                </a>
                <div className='card__info'>
                    <div>
                        <p className='card__name'>Top Ropes Indigo</p>
                        <p className='card__price'>$240</p>
                    </div>
                    <a href="index.html">
                        <p className='card__show'>Show →</p>
                    </a>
                </div>
            </div>
        </div>
    )
}