import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import NavBar from './components/navbar/NavBar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<NavBar />
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
