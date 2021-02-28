import React, { useContext } from 'react';
import SecretsContext from '../context/SecretsContext';

const Secrets = ({ editSecretRow, removeSecretRow }) => {
	const { secrets } = useContext(SecretsContext);

	return secrets.map((secret) => (
		<div className='content-container' key={secret.site}>
			<div className='list-item'>
				<p>Site: {secret.site}</p>
				<p>ID: {secret.id}</p>
				<p>PW: {secret.pw}</p>
				<p>Memo: {secret.memo}</p>
				<div style={{ display: 'flex' }}>
					<button
						style={{ marginLeft: 'auto' }}
						className='button'
						onClick={() =>
							editSecretRow({
								site: secret.site,
								id: secret.site,
								pw: secret.pw,
								memo: secret.memo,
							})
						}
					>
						Edit
					</button>
					<button
						className='button'
						onClick={() => {
							removeSecretRow({ site: secret.site });
						}}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	));
};

export { Secrets as default };
