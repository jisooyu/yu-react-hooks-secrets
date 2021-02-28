import React, { useState, useEffect } from 'react';

const EditSecretsForm = (props) => {
	const [currentSecret, setCurrentSecret] = useState(props.currentSecret);

	useEffect(() => {
		setCurrentSecret(props.currentSecret);
	}, [props]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCurrentSecret({ ...currentSecret, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.editSecrets({
			site: currentSecret.site,
			id: currentSecret.id,
			pw: currentSecret.pw,
			memo: currentSecret.memo,
		});
	};

	return (
		<div className="content-container">
			<div className="header">
				<div className="header__content">
					<div className="header__subtitle">
						<h3>EditSecretsForm</h3>
						<form className="form" onSubmit={handleSubmit}>
							<label>Site:</label>
							<input
								className="text-input"
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
							<textarea
								className="textarea"
								type="text"
								name="memo"
								value={currentSecret.memo}
								onChange={handleInputChange}
							></textarea>
							<input className="button" type="submit" value="Submit" />
							<button className="button" onClick={() => props.setEditingStatus(false)}>
								Cancel
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditSecretsForm;
