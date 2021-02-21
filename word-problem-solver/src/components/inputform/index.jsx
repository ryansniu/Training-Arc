import React from 'react';
import './style.css';

function InputForm() {
    const nameEl = React.useRef(null);

    const handleSubmit = e => {
      e.preventDefault();
      fetch('/wolfram', {
            method: "POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(nameEl.current.value)
        }
      ).then(res => res.json()).then(data => {
        alert(JSON.stringify(data));
      });
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