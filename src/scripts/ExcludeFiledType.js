const excludeFieldType = element => {
	const { type } = element;
	let exclude = true;

	// If not undefined, run.
	if (type !== undefined) {
		const excludes = ['search', 'submit', 'reset', 'button', 'hidden'];
		exclude = excludes.some(el => element.type.includes(el));
	}

	return exclude;
};

export default excludeFieldType;
