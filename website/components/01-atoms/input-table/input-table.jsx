// IMPORTS
import Action from 'components/01-atoms/action/action';
import PropTypes from 'prop-types';
import { useFieldArray } from 'react-hook-form';

// COMPONENT
const InputTable = ({ className, category, options, control, defaultValue, register, formState, labels }) => {

	// BRING IN FIELD ARRAY
	const { fields, append, remove } = useFieldArray({
		control,
		name: category,
		keyName: 'id',
	});

	// HANDLE ADD ARTICLE
	const handleAddArticle = () => {
		console.log(options);
		append({ item: defaultValue });
	};

	// HANDLE REMOVE ARTICLE
	const handleRemoveArticle = (index) => {
		if (fields.length >= 2) remove(index);
	};

	// RENDER
	return (
		<div className={ ` ${ className } input-table ` }>
			{ fields.map((field, index) => (
				<div className="input-table__row row" key={ field.id }>
					{ options.map((option) => (
						<div className={ `row__input-field ${ formState.errors[category] && formState.errors[category][index] && formState.errors[category][index][option.id] ? 'input-field--error' : null }` } key={ option.id }>
							<label className="input-field__label" htmlFor={ `${ category }-${ index }-${ option.id }` }>{ `${ option.label }` }</label>
							<input className="input-field__input" id={ `${ category }-${ index }-${ option.id }` } type={ option.type } placeholder={ option.placeholder } { ...register(`${category}.${index}.${option.id}`, option.validation) } defaultValue={ option.defaultValue } />
						</div>
					))}
					{ fields.length >= 2 ? (
						<Action className="row__remove-item-link" symbol="close-circle" onClick={ () => { return handleRemoveArticle(index); } }>{ labels.remove }</Action>
					) : null }
				</div>
			))}
			<Action className="input-table__add-item-link" symbol="add-circle" onClick={ handleAddArticle }>{ labels.add }</Action>
		</div>
	);

};

// PROP-TYPES
InputTable.propTypes = {
	className: PropTypes.string,
	category: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		defautlValue: PropTypes.string,
		validation: PropTypes.shape({
			validate: PropTypes.func,
		}),
	})),
	error: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.shape({
			message: PropTypes.string,
		}),
	})),
};

// EXPORT
export default InputTable;
