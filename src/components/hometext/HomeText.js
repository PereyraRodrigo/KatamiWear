import whiteLogoCircle from '../../media/whitelogocircle.png'
import aboutUs from '../../media/aboutus.png'

export const HomeText = () => {
    return (
        <>
            <div className="aboutUs">
                <div className="container">                    
                    <div className="aboutUs__block">
                        <img className='aboutUs__img1' src={aboutUs} alt="About us" />
                        <p className='aboutUs__text'>Katami Wear is your second skin to explore the outer world through the inner one. <strong> Let's start. </strong></p>
                        <img className='aboutUs__img2' src={whiteLogoCircle} alt="Katami white logo" />
                    </div>
                </div>
            </div>
        </>
    )
}