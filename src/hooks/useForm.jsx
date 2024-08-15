import { useState } from "react";

export const useForm = (intialValues, onSubmitHandler) => {
    const [values, setValues] = useState(intialValues);

    const changeHandler = (e) => {
        setValues((state) => ({...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(intialValues);
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    }
};