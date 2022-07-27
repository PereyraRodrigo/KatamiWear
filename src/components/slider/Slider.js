export const Slider = () => {
    return (
        <div className="container">
            <div className="cd-slider">
                <ul>
                    <li>
                        <div className="image foto1"></div>
                        <div className="content">
                            <h2>New collection <br/> Vostok</h2>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                    <li>
                    <div className="image foto2"></div>
                        <div className="content">
                            <h2>Collection <br />SS22</h2>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                    <li>
                    <div className="image foto3"></div>
                        <div className="content">
                            <h2>Katami <br /> Wear</h2>
                            <a href="index.html">View Gallery</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}