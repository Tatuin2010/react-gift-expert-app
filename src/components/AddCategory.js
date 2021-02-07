import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) => {
        setInputValue(e.target.value)
    }

    const inputSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={inputSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={inputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
