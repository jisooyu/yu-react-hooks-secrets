import React, { useState } from 'react';

const AddSecretForm = (props) => {
	const [site, setSite] = useState('');
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [memo, setMemo] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			site,
			id,
			pw,
			memo
		} );
		setSite( '' )
		setId( '' )
		setPw( '' )
		setMemo('')
	};
	return (
		<div className='content-container'>
			<h3>Add Secrets Form</h3>
			
			<form className='form' onSubmit={handleSubmit}>
				<label>Site</label>
				<input
					className='text-input'
					type='text'
					value={site}
					onChange={(e) => {
						setSite(e.target.value);
					}}
				/>
				<label>ID</label>
				<input
					className='text-input'
					type='text'
					value={id}
					onChange={(e) => {
						setId(e.target.value);
					}}
				/>
				<label>PW</label>
				<input
					className='text-input'
					type='password'
					value={pw}
					onChange={(e) => {
						setPw(e.target.value);
					}}
				/>
				<label>Memo</label>
				<textarea
					className='textarea'
					type='text'
					value={memo}
					onChange={(e) => {
						setMemo(e.target.value);
					}}
				></textarea>
				<input className='button' type='submit' value='Submit' />
	
			</form>
		</div>
	);
};
export { AddSecretForm as default };
