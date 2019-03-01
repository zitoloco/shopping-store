import React from 'react';
import ReactDOM from 'react-dom';
import Main from './src/pages/main';
import Cart from './src/pages/cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} component={Main} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
