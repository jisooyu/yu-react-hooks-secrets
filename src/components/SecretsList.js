import React, { useState, useContext } from 'react';
import SecretsContext from '../context/SecretsContext';
import AddSecretForm from './AddSecretForm';
import EditSecretForm from './EditSecretForm';
import Secrets from './Secrets';

const SecretsList = () => {
	const { secrets, dispatch } = useContext(SecretsContext);
	const [editing, setEditing] = useState(false);
	const [currentSecret, setCurrentSecret] = useState([]);

	const addSecrets = ({ site, id, pw, memo }) => {
		console.log('addSecrets secrets ', secrets);
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

	const removeSecret = (site) => {
		if (secrets) {
			dispatch({
				type: 'REMOVE_SECRET',
				site,
			});
		}
	};
	const editRow = (currentSecret) => {
		setEditing(true);

		setCurrentSecret({
			site: currentSecret.site,
			id: currentSecret.id,
			pw: currentSecret.pw,
			memo: currentSecret.memo,
		});
	};

	const editSecrets = ({ site, id, pw, memo }) => {
		console.log('editSecrets', site, id, pw, memo);
		if (secrets) {
			dispatch({
				type: 'EDIT_SECRET',
				site,
				id,
				pw,
				memo,
			});
		}
		setEditing(false);
	};

	return (
		<>
			{editing ? (
				<>
					<EditSecretForm
						editing={editing}
						setEditing={setEditing}
						currentSecret={currentSecret}
						editSecrets={editSecrets}
					/>
				</>
			) : (
				<>
					<AddSecretForm addSecrets={addSecrets} />
				</>
			)}
			<div className='content-container'>
				<h3>List of Secret</h3>
				<Secrets editRow={editRow} removeSecret={removeSecret} />
			</div>
		</>
	);
};

export { SecretsList as default };
