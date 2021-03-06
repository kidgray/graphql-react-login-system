import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import 'bootstrap/dist/css/bootstrap.css';
import './client/styles/styles.scss';

// COMPONENTS
import ApolloApp from './client/components/index';

ReactDOM.render(<ApolloApp />, document.getElementById('root'));