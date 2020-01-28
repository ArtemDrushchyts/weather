import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.weatherMethod}>
             <input type='text' name='city' placeholder='City'/>
             <button>Weather forecast</button>
        </form>
     );
}

export default Form;