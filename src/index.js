import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './styles/styles.scss';

// COMPONENTS & PAGES
import SignUpPage from './pages/signup/signup.component.jsx';

const App = () => {
    return (
        <div>
           <SignUpPage />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));