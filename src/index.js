import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './styles/styles.scss';

const App = () => {
    return (
        <div>
            <h1>REGISTER / LOGIN SYSTEM</h1>
            <p>USERNAME: The Username field will go here.</p>
            <p>PASSWORD: The Password field will go here.</p>

            <p>Don't have an account yet? [Register one!] (This should be a link, like on actual websites) </p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));