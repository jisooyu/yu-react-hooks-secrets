import React, { useState } from 'react';

const AddSecretForm = (props) => {
	const [currentSecret, setCurrentSecret] = useState([]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCurrentSecret({ ...currentSecret, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addSecrets({
			site: currentSecret.site,
			id: currentSecret.id,
			pw: currentSecret.pw,
			memo: currentSecret.memo,
		} )
		setCurrentSecret('')
	};
	return (
		<div className='content-container'>
			<h3>Add Secrets Form</h3>

			<form className='form' onSubmit={handleSubmit}>
				<label>Site</label>
				<input
					className='text-input'
					type='text'
					name='site'
					value={currentSecret.site}
					onChange={handleInputChange}
				/>
				<label>ID</label>
				<input
					className='text-input'
					type='text'
					name='id'
					value={currentSecret.id}
					onChange={handleInputChange}
				/>
				<label>PW</label>
				<input
					className='text-input'
					type='password'
					name='pw'
					value={currentSecret.pw}
					onChange={handleInputChange}
				/>
				<label>Memo</label>
				<textarea
					className='textarea'
					type='text'
					name='memo'
					value={currentSecret.memo}
					onChange={handleInputChange}
				></textarea>
				<input className='button' type='submit' value='Submit' />
			</form>
		</div>
	);
};
export { AddSecretForm as default };
