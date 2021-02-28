import React, { useEffect, useReducer } from 'react';
import SecretsContext from '../context/SecretsContext';
import secretsReducers from '../reducers/secrets';
import SecretsList from './SecretsList'

const App = () => {
	const [secrets, dispatch] = useReducer(secretsReducers, []);

	useEffect(() => {
		const secrets = JSON.parse(localStorage.getItem('secrets'));
		if (secrets) {
			dispatch({ type: 'POPULATE_SECRETS', secrets });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('secrets', JSON.stringify(secrets));
	}, [secrets]);

	return (
		<SecretsContext.Provider value={{ secrets, dispatch }}>
			<SecretsList />
		</SecretsContext.Provider>
	);
};

export { App as default };
