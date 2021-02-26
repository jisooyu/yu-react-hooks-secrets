import React, { useState } from 'react';

const AddSecretForm = ( props ) => {
	const initialFormState = {site: '', id: '', pw: '', memo:'' };
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
		setCurrentSecret( initialFormState)
	};
	return (
		<div className='content-container'>
			<div className='header'>
				<div className='header__content'>
					<div className='header__subtitle'>
						<h3>Add Secrets Form</h3>
					</div>
				</div>
			</div>

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
				<button className='button'>Submit</button>
			</form>
		</div>
	);
};
export { AddSecretForm as default };
