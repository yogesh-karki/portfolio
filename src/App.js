import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import Particles from "react-particles-js";



const App = () => {
    return ( 
        <>
            <Particles  
            className="particles-canvas"
                params= {{
                    particles: {
                        number : {
                            value: 30,
                            density: true, 
                            value_area: 250000
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke : {
                            width: 6,
                            color: "#f9ab00"
                        }
                    }
                }}
            />
            <Navbar />
            <Header />
        </>
     );
}
 
export default App;