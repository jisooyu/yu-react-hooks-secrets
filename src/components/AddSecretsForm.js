import React, { useState } from 'react';

const AddSecretsForm = ({ addSecrets }) => {
	const initialSecretsState = { site: '', id: '', pw: '', memo: '' };
	const [currentSecret, setCurrentSecret] = useState(initialSecretsState);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCurrentSecret({ ...currentSecret, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addSecrets({
			site: currentSecret.site,
			id: currentSecret.id,
			pw: currentSecret.pw,
			memo: currentSecret.memo,
		});
		setCurrentSecret(initialSecretsState);
	};

	return (
		<div className="content-container">
			<div className="header">
				<div className="header__content">
					<div className="header__subtitle">
						<h3>AddSecretsForm</h3>
						<form className="form" onSubmit={handleSubmit}>
							<label>Site:</label>
							<input
								className="text-inpu"
								type="text"
								name="site"
								value={currentSecret.site}
								onChange={handleInputChange}
							/>
							<label>ID:</label>
							<input
								className="text-input"
								type="text"
								name="id"
								value={currentSecret.id}
								onChange={handleInputChange}
							/>
							<label>PW:</label>
							<input
								className="text-input"
								type="password"
								name="pw"
								value={currentSecret.pw}
								onChange={handleInputChange}
							/>
							<label>Memo:</label>
							<input
								className="text-input"
								type="text"
								name="memo"
								value={currentSecret.memo}
								onChange={handleInputChange}
							/>
							<button className="button">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddSecretsForm;
