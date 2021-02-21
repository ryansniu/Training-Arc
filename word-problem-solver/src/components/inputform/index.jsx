import React, {useState, useEffect} from 'react';
import './style.css';

function InputForm() {
    const nameEl = React.useRef(null);
    var query = {};
    var topic = [];
    let numpods = 0;
    let arr = [];
    const [queries, setQueries] = useState([]);
    const [topics, setTopics] = useState([]);

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
        if (data["queryresult"]["success"] === false) {
            arr.push("Can't solve word problem. Try another problem!");
        }
        else {
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
            let t = data["topics"];
            var k;
            for (k = 0; k < t.length; k++) {
                topic.push(JSON.stringify(t[k]));
            }
        }
        setQueries(arr);
        setTopics(topic);
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
            return <div>{newText}<br /></div>;
        })}
        {topics.map((value, index) => {
            return <p className="topics">{value}</p>;
        })}
        </div>
    );
}

export default InputForm;