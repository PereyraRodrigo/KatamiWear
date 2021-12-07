import pic1 from '../../media/pic1.jpg';

export const Newcollection = () => {
    return (
        <div className='newcoll'>
            <p className='titleOne newcoll__title'>New Collection Vostok</p>
            <div className='newcoll__block1'>
                <p className='newcoll__text'>Push the limits, expand the boundaries, breath in new opportunities in the air, and the world will become a better place.</p>
                <img className='newcoll__pic1' src={pic1} alt="Product Img" />
            </div>
            <div className='newcoll__block2'>

            </div>
        </div>
    )
}