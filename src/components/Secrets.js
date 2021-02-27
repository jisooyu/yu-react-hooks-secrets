import React, {useContext} from 'react';
import SecretsContext from '../context/SecretsContext';

const Secrets = ({ editRow, removeSecret }) => {
	const { secrets } = useContext(SecretsContext);

	return secrets.map((secret) => (
		<div className='list-item' key={secret.site}>
			<p>Site:{secret.site}</p>
			<p>ID:{secret.id}</p>
			<p>PW:{secret.pw}</p>
			<p>Memo:{secret.memo}</p>
			<button className='button' onClick={ () => editRow( { site:secret.site, id:secret.id, pw:secret.pw, memo:secret.memo })}>
				Edit
			</button>
			<button className='button' onClick={() => removeSecret(secret.site)}>
				Remove
			</button>
		</div>
	));
};

export { Secrets as default };
