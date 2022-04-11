import React from 'react';
import { BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './home';
import About from '../about';

function RouterEx() {
    return(
        <div>
            <h2>React-router</h2>
            <Router>
                <nav>
                    <Link to="/" id="home">Home </Link>
                    <Link to="/aboutus" id="home"> about us</Link> 
                </nav>
                <Routes>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/aboutus" element= {<About/>}/>
                </Routes>
            </Router>
        </div>
    )
    
}
export default RouterEx