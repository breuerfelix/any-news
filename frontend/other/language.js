class language {
	constructor() {
		this.dict = {};
	}

	get(ident) {
		const translation = this.dict[ident];
		if(!translation) return ident;
		return translation;
	}
}

export default new language();
