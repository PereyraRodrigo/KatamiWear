import { useEffect, useState } from "react"
import { ItemList } from "./ItemList";

import pic3 from "../../media/pic3.jpg"

const data = [
    { id: 1, name: "Shirt", description: "Size XL", image:"https://katamiwear.com/upload/iblock/7d5/7d50477d626244ca4d84ef06d87f78f7.jpg" ,stock: 5 },
    { id: 2, name: "Shirt 2", description: "Size S", image:"https://katamiwear.com/upload/iblock/26e/26e803679b015119043433ca6d94ab57.jpg" ,stock: 3 },
    { id: 3, name: "Shirt 3", description: "Size L", image: { pic3 } ,stock: 8 }
];
//no supe como importar una imagen propia asi que las traje de internet(traté de la manera que dejé la pic3 pero no funcionó)

export const ItemListContainer = () => {
    const [productos, setProductos] = useState(null);

    useEffect(() => {

        const promiseTryOut = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 3000);
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
    }, []);
    

    /* const onAdd = () => {
        alert(`Agregaste un item al carrito`)
    } */    
    return (
        <div>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
            <ItemList productos={productos} />
        </div>
    )
}