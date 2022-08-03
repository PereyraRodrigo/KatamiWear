import igLogo from '../../media/instagram.svg'
import linkedinLogo from '../../media/linkedin.svg'
export const Footer = () => {
    return (
        <footer className="container-fluid footer__bg">
            <div className="container footer__container">
                <div className="footer__topBlocks">
                    <div className="footer__leftBlock col-12 col-md-6">
                        <div>
                            <p>Boyarsky per. 6, Moscow.</p>
                            <p>Daily 10:00-21:00</p>
                        </div>
                        <div>
                            <p>+7 (977) 800-80-88</p>
                            <p>info@katamiwear.ru</p>
                        </div>
                        <div className='footer__socialMedia'>
                            <a href="https://pereyrarodrigo.github.io/" target="__blank" rel='noreferrer'>
                                <img src={igLogo} alt="Instagram Logo" />
                            </a>
                            <a href="https://www.linkedin.com/in/pereyrarodrigo/" target="__blank" rel='noreferrer'>
                                <img src={linkedinLogo} alt="Linkedin Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__rightBlock col-12 col-md-6">
                        <div>
                            <a href="index.html">Women</a>
                            <a href="index.html">Men</a>
                        </div>
                        <div>
                            <a href="index.html">About</a>
                            <a href="index.html">Privacy Policy</a>
                        </div>
                        <div>
                            <a href="index.html">Shipping</a>
                            <a href="https://pereyrarodrigo.github.io/" target="__blank" rel='noreferrer'>Contact</a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottomBlock">
                    <p>2022 © Katami Wear</p>
                    <p>PSRN: 316645100124298</p>
                </div>
            </div>
        </footer>
    )
}