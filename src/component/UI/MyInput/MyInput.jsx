import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({...props}) => {
    return (
        <div>
            {props.name}
            <input className={classes.myInput} {...props} />
        </div>
    );
};

export default MyInput;