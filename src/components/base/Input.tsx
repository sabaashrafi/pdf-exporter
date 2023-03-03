import React from 'react';

interface InputProps {
    label?: string
    value: any,
    onChange?: any
}
const TextField = (props: InputProps) => {
    return (
        <>
            <div>{props.label}</div>
            <input {...props} />
        </>

    )
}

export default TextField;