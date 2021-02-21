import React, {useState, useEffect} from 'react';
import './style.css';

function InputForm() {
    const nameEl = React.useRef(null);
    var query = {};
    let numpods = 0;
    let arr = [];
    const [queries, setQueries] = useState([]);

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
        // alert(JSON.stringify(data));
        query = data["queryresult"];
        numpods = query["numpods"];
        var i;
        for (i = 0; i < numpods; i++) {
            var pod = query["pods"][i];
            let numSubpods = pod["numsubpods"];
            var j;
            for (j = 0; j < numSubpods; j++) {
                arr.push(JSON.stringify(pod["subpods"][j]["plaintext"]));
            }
        }
        setQueries(arr);
      });
    };

    useEffect(() => {
        //alert(queries);
    }, [queries])

    return (
        <div className="input-form">
        <form onSubmit={handleSubmit}>
            <label className="textbox-label">
                Put word problem here:
                <input className="input-component" type="text" name="problem" ref={nameEl} />
            </label>
            <input className="submit" type="submit" value="Submit" />
        </form>
        {queries.map((value, index) => {
            let newText = value.split('\\n').map(str => {
                return <p className="queries">{str}</p>
            });
            return newText;
        })}
        </div>
    );
}

export default InputForm;