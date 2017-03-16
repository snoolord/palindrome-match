import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => {
	return (
		<div>
            <App />
		</div>
	);
};

export default Root;
