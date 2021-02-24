import React, { useContext } from 'react';
import SecretsContext from '../context/SecretsContext';
import SecretsForm from './SecretsForm';
import Secrets from './Secrets';

const SecretsList = () => {
	const { secrets, dispatch } = useContext(SecretsContext);

	const addSecrets = ( { site, id, pw, memo }) => {
		if (secrets) {
			dispatch({
				type: 'ADD_SECRET',
				site,
				id,
				pw,
				memo,
			});
		}
	};

	const removeSecrets = (site) => {
		if ( secrets ) {
			dispatch( {
				type: 'REMOVE_SECRET', 
				site
			})
		}
	}

	const editSecrets = ( { site, id, pw, memo } ) => {
		let editCipher = secrets.map( ( secret ) => {
			if ( secret.site === site ) {
				secret.id = id
				secret.pw = pw
				secret.memo = memo
			}
			return secret
		})
		if ( secrets ) {
			dispatch( {
				type: 'EDIT_SECRET', 
				site:editCipher.site,
				id:editCipher.id,
				pw:editCipher.pw,
				memo:editCipher.memo
			})
		}
	}


	return (
		<div>
			<SecretsForm onSubmit={addSecrets} />
			<Secrets editSecrets={ editSecrets } removeSecrets={removeSecrets} />
		</div>
	);
};

export { SecretsList as default };
