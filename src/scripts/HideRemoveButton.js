import dataAttrCount from './DataAttrCount';

const hideRemoveButton = (element, options, event) => {
	if (dataAttrCount(element, options, 'id') === 1) {
		const siblings = options.form.querySelectorAll('*');

		siblings.forEach(sibling => {
			const siblingId = sibling.dataset.id;

			if (siblingId !== undefined) {
				const parentId = event.target.closest('[data-id]').dataset.id;
				if (siblingId === parentId) {
					const rmButton = sibling.querySelector(`.${options.removeButtonClass}`);
					if (rmButton !== null) {
						rmButton.style.display = 'none';
					}
				}
			}
		});
	}
};

export default hideRemoveButton;
