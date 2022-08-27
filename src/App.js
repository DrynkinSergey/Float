import contactBtn from './img/contactBtn.png'
import letter from './img/lettering.png'
import headphone from './img/firstScreen/headphone.png'
import camera from './img/firstScreen/camera.png'
import note from './img/firstScreen/note2.png'
import youtube from './img/firstScreen/ytube.png'
import donut from './img/firstScreen/donut.png'


import man from './img/clients/man.png'

import Header from "./components/Header";
import ClientsItems from "./components/ClientsItems";

function App() {
    return (
        <div className="App">
            <section className='firstWrapper'>
                <div className='firstScreen bgImage'>
                    <img src={headphone} alt=""/>
                    <img src={camera} alt=""/>
                    <img src={youtube} alt=""/>
                    <img src={donut} alt=""/>
                    <img src={note} alt=""/>
                    <Header/>
                    <div className="firstScreen_content">
                        <span style={{textTransform: 'uppercase'}}>practice by SZE</span>
                        <h1>creative</h1>
                        <img src={letter} alt=""/>
                        <div className='firstScreen_viewers'>
                            <span>our content has reached</span>
                            <span>1 000 030 021</span>
                            <span>VIEWERS</span>
                        </div>
                    </div>


                </div>

            </section>
            <section className='clients'>
                <div className="container">
                    <Header/>
                    <div className='clients_wrapper'>
                        <div className="left">
                            <h1>150+
                                CLIENTS</h1>
                            <p>We work with some of the biggest gaming entertainers & world-renowned organisations.
                            </p>
                            <a href="#">
                                view all
                            </a>
                        </div>
                        <div className="right">
                            {/*    <div className="item">
                                <img src={man} alt=""/>
                            </div>
                            <div className="item down">
                                <img src={man} alt=""/>
                                adsf
                            </div>
                            <div className="item">
                                <img src={man} alt=""/>
                            </div>
                         <div className="item">
                                <img src={man} alt=""/>
                            </div>
                            <div className="item down ">
                                <img src={man} alt=""/>
                                <h2>dsaf</h2>
                            </div>
                            <div className="item">
                                <img src={man} alt=""/>
                                adsf
                            </div>
                            <div className="item">
                                <img src={man} alt=""/>
                            </div>
                            <div className="item down">
                                <img src={man} alt=""/>
                                adsf
                            </div>
                         <div className="item">
                                <img src={man} alt=""/>
                            </div>*/}
                            <ClientsItems/>
                        </div>
                    </div>
                </div>

            </section>

            <footer style={{height: '200vh'}}>
                asf
            </footer>
        </div>
    );
}

export default App;
