import fieldSetup from './FieldSetup';
import addField from './AddField';
import removeField from './RemoveField';

const initClone = (element, options) => {
	fieldSetup(element, options);
	addField(element, options);
	removeField(element, options);
};

export default initClone;
