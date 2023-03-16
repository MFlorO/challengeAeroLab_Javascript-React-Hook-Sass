import { useState } from 'react';


export const useForm = ( initialForm = {}, validate ) => {
  
    const [ formState, setFormState ] = useState( initialForm );


    const [ errorFormValid, seterrorFormValid ] = useState( {} );

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [ name ]: value });

        seterrorFormValid(validate ({...formState, [ name ]:value }));
    }

    const onResetForm = () => setFormState( initialForm );
    

    return {
        ...formState,
        formState,
        onInputChange,
        errorFormValid,
        onResetForm
    }
}   