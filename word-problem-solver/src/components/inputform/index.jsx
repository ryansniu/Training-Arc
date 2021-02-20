import React from 'react';
import './style.css';

function InputForm() {
    const nameEl = React.useRef(null);

    const handleSubmit = e => {
      e.preventDefault();
      alert(nameEl.current.value);
      // want to call function that will send problem to wolfram api
    };

    return (
        <div className="input-form">
        <form onSubmit={handleSubmit}>
            <label className="textbox-label">
                Put word problem here:
                <input className="input-component" type="text" name="problem" ref={nameEl} />
            </label>
            <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default InputForm;