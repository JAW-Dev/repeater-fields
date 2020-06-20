/* global document */

import excludeFieldType from './ExcludeFiledType';

const fieldSetup = (element, options) => {
	const children = element.querySelectorAll('*');

	// Loop though each of the element's children
	// to find field elements.
	children.forEach(child => {
		if (!excludeFieldType(child)) {
			const { type } = child;
			const hasAdd = element.querySelector(`.${options.addButtonClass}`);
			const hasRemove = element.querySelector(`.${options.removeButtonClass}`);
			const dataId = element.dataset.id
				? element.dataset.id
				: Math.random()
						.toString(36)
						.substr(2, 9);

			// Set the field type data attribute.
			element.setAttribute('data-fieldtype', type);

			// Set field id data attribute.
			element.setAttribute('data-id', dataId);

			// If add and remove buttons don't exist, create them.
			if (!hasAdd && !hasRemove) {
				const addButton = document.createElement('button');
				const removeButton = document.createElement('button');
				const parent = child.parentNode;

				// Create the add button.
				addButton.setAttribute('class', options.addButtonClass);
				addButton.innerHTML = options.addButtonLabel;
				parent.appendChild(addButton);

				// Create the Remove button.
				removeButton.setAttribute('class', options.removeButtonClass);
				removeButton.style.display = 'none';
				removeButton.innerHTML = options.removeButtonLabel;
				parent.appendChild(removeButton);
			}
		}
	});
};

export default fieldSetup;
