export const Slider = () => {
    return (
        <div className="container">
            <div className="cd-slider">
                <ul>
                    <li>
                        <div className="image foto1"></div>
                        <div className="content">
                            <p>New collection <br/> Vostok</p>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                    <li>
                    <div className="image foto2"></div>
                        <div className="content">
                            <p>Collection <br />SS22</p>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                    <li>
                    <div className="image foto3"></div>
                        <div className="content">
                            <p>Katami <br /> Wear</p>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}