import pic1 from '../../media/pic1.jpg';
import pic2 from '../../media/pic2.jpg';
import pic3 from '../../media/pic3.jpg';

export const Newcollection = () => {
    return (
        <div className='container newcoll'>
            <p className='titleOne newcoll__title'>New Collection Vostok</p>
            <div className='newcoll__blockHolder'>
                <div className='newcoll__block1'>
                    <p className='newcoll__text'>Push the limits, expand the boundaries, breath in new opportunities in the air, and the world will become a better place.</p>
                    <div className='newcoll__block1b'>
                        <img className='newcoll__pic1' src={pic1} alt="Product Img" />
                        <p className='newcoll__pic1SidewaysText'>Manami jacket</p>
                    </div>
                    <p className='newcoll__pic1text'>We are happy to present you the first drop of our collection Vostok.</p>                    
                    <div className='newcoll__pic2b'>
                        <img className='newcoll__pic2' src={pic2} alt="Product Img" />
                        <p  className='newcoll__pic2SidewaysText'>White space jacket</p>
                    </div>
                </div>
                <div className='newcoll__block2'>
                    <div className='newcoll__block2B'>
                        <img className='newcoll__pic3' src={pic3} alt="Product Img" />
                        <div>NEW</div>
                    </div>
                    <p className='newcoll__button'>EXPLORE VOSTOK</p>
                </div>
            </div>
        </div>
    )
}