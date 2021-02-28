const secretsReducers = (state, action) => {
	switch (action.type) {
		case 'POPULATE_SECRETS':
			return action.secrets;
		case 'ADD_SECRET':
			return [
				...state,
				{
					site: action.site,
					id: action.id,
					pw: action.pw,
					memo: action.memo,
				},
			];
		case 'REMOVE_SECRET':
			return state.filter((secret) => secret.site !== action.site);
		case 'EDIT_SECRET':
			// id는 변경할 수 없는 구조
			return state.map((secret) => {
				if ( secret.id === action.id ) {
					return {
						...secret,
						site: action.site,
						id: action.id,
						pw: action.pw,
						memo: action.memo
					};
				} else {
					return secret;
				}
			});
		default:
			return state;
	}
};

export { secretsReducers as default };
