import React from 'react';
import Header from 'components/Header';
import Cars from 'components/Cars';
import Details from 'pages/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CarContext } from 'CarContext';

function App() {
    const [car, setCar] = React.useState({ brand: '', model: '', price: 0 });
    return (
        <Router>
            <Header />
            <Switch>
                <CarContext.Provider value={{ car, setCar }}>
                    <Route exact path="/" component={Cars} />
                    <Route path="/details" component={Details} />
                </CarContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;
