import { HomeText } from "../../components/hometext/HomeText"
import { Newcollection } from "../../components/newcollection/Newcollection"
import { Slider } from "../../components/slider/Slider"
// import { useEffect } from 'react'


export const Home = () => {

   /*  useEffect(() => {
        const script = document.createElement('script');
        script.src = "../../../public/cd-slider.js";
        script.async = true;
        document.body.appendChild(script);
        console.log('hello')
        return () => {
            document.body.removeChild(script);
        }
    }, []); */

    return (
        <main>
            <Slider />
            <Newcollection />
            <HomeText />
        </main>
    )
}