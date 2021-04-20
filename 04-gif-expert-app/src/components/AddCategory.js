import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    //el useState debe tener un valor inicial de default
    //sino obtendremos un error que el componente es no controlado
    //por renderizarse como undefined
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {

        setInputValue(e.target.value);

    }

    const handleSubmit = ( e ) => {
        
        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                placeholder="Hola mundo!"
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
