/* import { useEffect, useState } from "react" */
import { ItemCount } from "../itemcount/ItemCount"

let temp = {
    div: {
        display: "flex",
        justifyContent: "center",
        gap: "100px"
    }
}
/* import pic3 from "../../media/pic3.jpg"
import pic4 from '../../media/pic4.jpg'
import pic5 from '../../media/pic5.jpg'

const data = [
    { id: 1, name: "Shirt", description: "Size XL", image: pic5 ,stock: 5 },
    { id: 2, name: "Shirt 2", description: "Size S", image: pic4 ,stock: 3 },
    { id: 3, name: "Shirt 3", description: "Size L", image: pic3 ,stock: 8 }
]; */

export const ItemListContainer = ({greeting}) => {
    /* const [productos, setProductos] = useState(null);

    useEffect(() => {

        const promiseTryOut = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 0);
        });

        promiseTryOut
        .then(
            (res) => {
                console.log(res);
                setProductos(res)
            },
            (err) => {
            console.log("resuelto MAL");
            }
        )
        .catch((err) => {
            console.log(err + "RE MAL");
        });
    }, []); */        
    
    return (
        <>
            <p className="greetingTemp">{greeting}</p>
            <div style={temp.div}>
                <ItemCount stock="5" initial={1} />
                <ItemCount stock="3" initial={1} />
                <ItemCount stock="1" initial={1} />
            </div>
        </>
    )
}