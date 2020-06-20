import updateElementClass from './UpdateElementClass';
import hideRemoveButton from './HideRemoveButton';

const removeField = (element, options) => {
	const removeButton = element.querySelector(`.${options.removeButtonClass}`);

	removeButton.addEventListener('click', event => {
		event.preventDefault();
		updateElementClass(element, options);
		hideRemoveButton(element, options, event);
	});
};

export default removeField;
