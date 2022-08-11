import pic1 from '../../media/pic9.jpg'
import { ItemCount } from '../itemlistcontainer/ItemCount'
export const YourBagItemBlock = () => {
    return (
        <div className='yourBag__itemBlock'>
            <img className='col-2 yourBag__img' src={pic1} alt="" />
            <div className='col-10 yourBag__itemInfo'>
                <p className='col-2'>Hakama 2.0</p>
                <p className='col-2'>XS</p>
                <p className='col-2'>Black</p>
                <div className='col-2'><ItemCount /></div>
                {/* <p className='col-2'>- 1 +</p> */}
                <p className='col-2'>$480</p>
                <p className='col-1'>x</p>
            </div>
        </div>
    )
}