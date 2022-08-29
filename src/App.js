import Clients from "./components/Clients";
import FirstScreen from "./components/FirstScreen";
import WeDo from "./components/WeDo";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import {motion} from 'framer-motion'
import icon from './img/footer.png'
import {useEffect, useState} from "react";

function App() {
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {

        const mouseMove = e => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    const variants = {
        default: {
            x: mousePos.x,
            y: mousePos.y,

        }
    }
    return (
        <div className="App">
            <motion.div
                className='cursor'
                variants={variants}
                animate='default'
            />
            <FirstScreen/>
            <Clients/>
            <WeDo/>
            <OurTeam/>
            <ContactUs/>
            <footer>

                <div className="container flex">
                    <span>Floaat © 2019</span>
                    <span style={{display: 'flex'}}><img src={icon} style={{marginRight: '10px', width: '25px'}}
                                                         alt=""/>Made by Nextpage</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
