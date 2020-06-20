const dataAttrCount = (element, options, data) => {
	const dataType = `data-${data}`;
	const elementType = element.getAttribute(dataType);
	const siblings = options.form.querySelectorAll('*');
	let typeCount = 0;

	siblings.forEach(sibling => {
		const siblingType = sibling.getAttribute(dataType);
		if (siblingType !== undefined) {
			if (siblingType === elementType) {
				typeCount += 1;
			}
		}
	});

	return typeCount;
};

export default dataAttrCount;
