import Clients from "./components/Clients";
import FirstScreen from "./components/FirstScreen";
import WeDo from "./components/WeDo";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import torus from './img/clients/torus.png'

import icon from './img/footer.png'
function App() {
    return (
        <div className="App">
            <FirstScreen/>
            <Clients/>
            <WeDo/>
            <OurTeam/>
            <ContactUs/>
            <footer>

                <div className="container flex">
                    <span>Floaat © 2019</span>
                    <span style={{display:'flex'}}><img src={icon} style={{marginRight:'10px', width:'25px'}} alt=""/>Made by Nextpage</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
