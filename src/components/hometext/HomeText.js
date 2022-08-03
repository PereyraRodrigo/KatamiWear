import whiteLogoCircle from '../../media/whitelogocircle.png'
import aboutUs from '../../media/aboutus.png'

export const HomeText = () => {
    return (
        <>
            <div className="homeText">
                <div className="container homeText__container">                    
                    <div className="homeText__block">
                        <img className='homeText__img1' src={aboutUs} alt="About us" />
                        <p className='homeText__text'>Katami Wear is your second skin to explore the outer world through the inner one. <strong> Let's start. </strong></p>
                        <img className='homeText__img2' src={whiteLogoCircle} alt="Katami white logo" />
                    </div>
                </div>
            </div>
        </>
    )
}