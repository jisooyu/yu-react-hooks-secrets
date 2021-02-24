import React, {useContext} from 'react';
import SecretsContext from '../context/SecretsContext';

const Secrets = ({ editSecrets, removeSecrets }) => {
	const { secrets } = useContext(SecretsContext);

	return secrets.map((secret) => (
		<div className='list-header' key={secret.site}>
			<p>Site:{secret.site}</p>
			<p>ID:{secret.id}</p>
			<p>PW:{secret.pw}</p>
			<p>Memo:{secret.memo}</p>
			<button className='button' onClick={() => removeSecrets(secret.site)}>
				Remove
			</button>
			<button
				className='button'
				onClick={() =>
					editSecrets( {
						site: secret.site,
						id: secret.id,
						pw: secret.pw,
						memo:secret.memo
					} )
				}
			>
				Edit
			</button>
		</div>
	));
};

export { Secrets as default };
