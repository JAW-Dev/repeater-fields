import initClone from './InitClone';

const addField = (element, options) => {
	const addButton = element.querySelector(`.${options.addButtonClass}`);

	addButton.addEventListener('click', event => {
		event.preventDefault();
		const elementClone = element.cloneNode(true);
		const parentElement = element.parentNode;
		const children = elementClone.querySelectorAll('*');
		const removeButton = event.target.parentNode.querySelector(`.${options.removeButtonClass}`);
		const cloneRemoveButton = elementClone.querySelector(`.${options.removeButtonClass}`);

		// Clear input values.
		children.forEach(child => {
			if (child.value !== 'undefined') {
				child.value = '';
			}
			if (child.checked !== 'undefined') {
				child.checked = false;
			}
			if (child.selectedIndex !== 'undefined') {
				child.selectedIndex = 0;
			}
		});

		// Change the cloned element classes.
		if (elementClone.classList.contains(options.repeatableSelector)) {
			elementClone.classList.remove(options.repeatableSelector);
			elementClone.classList.add(options.clonedSelector);
		}

		// Append the element.
		if (element.nextSibling) {
			parentElement.insertBefore(elementClone, element.nextSibling);
		} else {
			parentElement.appendChild(elementClone);
		}

		removeButton.style.display = options.removeButtonDisplay;
		cloneRemoveButton.style.display = options.removeButtonDisplay;

		// Init on the cloned element.
		initClone(elementClone, options);
	});
};

export default addField;
