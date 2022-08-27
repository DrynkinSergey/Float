import Clients from "./components/Clients";
import FirstScreen from "./components/FirstScreen";
import WeDo from "./components/WeDo";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";

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
                    <span>Made by Nextpage</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
