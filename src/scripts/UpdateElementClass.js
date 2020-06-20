import dataAttrCount from './DataAttrCount';

const updateElementClass = (element, options) => {
	const parentElement = element.parentNode;

	if (dataAttrCount(element, options, 'id') > 1) {
		parentElement.removeChild(element);

		if (element.classList.contains(options.repeatableSelector)) {
			parentElement.children[0].classList.remove(options.clonedSelector);
			parentElement.children[0].classList.add(options.repeatableSelector);
		}
	}
};

export default updateElementClass;
