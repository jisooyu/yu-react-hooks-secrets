import React, { useState, useContext } from 'react';
import SecretsContext from '../context/SecretsContext';
import AddSecretForm from './AddSecretForm';
import EditSecretForm from './EditSecretForm';
import Secrets from './Secrets';

const SecretsList = () => {
	const { secrets, dispatch } = useContext(SecretsContext);
	const initialFormState = { site: '', id: '', pw: '', memo: '' };
	const [currentSecret, setCurrentSecret] = useState(initialFormState);
	const [editingStatus, setEditingStatus] = useState(false);

	const addSecrets = ({ site, id, pw, memo }) => {
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

	const editSecretRow = ({ site, id, pw, memo }) => {
		setEditingStatus(true);

		setCurrentSecret({
			site,
			id,
			pw,
			memo,
		});
	};

	const editSecrets = ({ site, id, pw, memo }) => {
		if (secrets) {
			dispatch({
				type: 'EDIT_SECRET',
				site,
				id,
				pw,
				memo,
			});
		}
		setEditingStatus(false);
	};

	return (
		<>
			{editingStatus ? (
				<EditSecretForm
					setEditingStatus={setEditingStatus}
					currentSecret={currentSecret}
					editSecrets={editSecrets}
				/>
			) : (
				<AddSecretForm addSecrets={addSecrets} />
			)}
			<div className="content-container">
				<div className="header">
					<div className="header__content">
						<div className="header__subtitle">
							<h3>List of Secrets</h3>
						</div>
					</div>
				</div>
				<Secrets editSecretRow={editSecretRow} removeSecret={removeSecret} />
			</div>
		</>
	);
};

export { SecretsList as default };
