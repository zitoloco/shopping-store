import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import {Store} from './src/store';
class App extends React.Component {
    render(){
        return(
            <Provider store={Store}>
                <Routes />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
