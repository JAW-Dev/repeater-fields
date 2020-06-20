/* global document */

import initClone from './InitClone';

const cloneFields = options => {
	const setOptions = {
		repeatableSelector: options.repeatableSelector !== undefined ? options.repeatableSelector : 'repeatable',
		clonedSelector: options.clonedSelector !== undefined ? options.clonedSelector : 'cloned',
		addButtonClass: options.addButtonClass !== undefined ? options.addButtonClass : 'add',
		addButtonLabel: options.addButtonLabel !== undefined ? options.addButtonLabel : 'Add',
		removeButtonClass: options.removeButtonClass !== undefined ? options.removeButtonClass : 'remove',
		removeButtonLabel: options.removeButtonLabel !== undefined ? options.removeButtonLabel : 'Remove',
		removeButtonDisplay: options.removeButtonDisplay !== undefined ? options.removeButtonDisplay : 'inline'
	};

	if (options.form !== undefined) {
		setOptions.form = document.querySelector(options.form);
	} else if (typeof options === 'string') {
		setOptions.form = document.querySelector(options);
	}

	if (setOptions.form !== null) {
		const elements = setOptions.form.querySelectorAll(`.${setOptions.repeatableSelector}`);

		for (let i = 0; i < elements.length; i++) {
			initClone(elements[i], setOptions);
		}
	}
};

export default cloneFields;
