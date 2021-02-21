import React, {useState, useEffect} from 'react';
import './style.css';

function InputForm() {
    const nameEl = React.useRef(null);
    var query = {};
    var topic = [];
    let numpods = 0;
    let arr = [];
    const [isLoading, setIsLoading] = useState(false);
    const [queries, setQueries] = useState([]);
    const [topics, setTopics] = useState([]);

    const handleSubmit = e => {
      e.preventDefault();
      setIsLoading(true);
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
                if (pod["title"] === "Result" || pod["title"] === "Additional results" || pod["title"] === "Equations with variables") {
                    let numSubpods = pod["numsubpods"];
                    var j;
                    for (j = 0; j < numSubpods; j++) {
                        arr.push(JSON.stringify(pod["subpods"][j]["plaintext"]));
                    }
                }
            }
            let t = data["topics"];
            var k;
            for (k = 0; k < t.length; k++) {
                topic.push(JSON.stringify(t[k]));
            }
        }
        setIsLoading(false);
        setQueries(arr);
        setTopics(topic);
      });
    };

    useEffect(() => {
        //alert(queries);
    }, [queries])

    return (
        <div>
            <div className="input-form">
                <form onSubmit={handleSubmit}>
                    <label className="textbox-label">
                        ENTER A WORD PROBLEM: <br/>
                        <textarea className="input-component" type="text" name="problem" ref={nameEl} />
                    </label>
                    <br/>
                    <input className="submit" type="submit" value="SUBMIT" />
                </form>
            </div>
            <div className="query-text">
                <label className="textbox-label">
                        <b>SOLUTION:</b>
                </label>
                {isLoading &&
                    <label className="textbox-label">
                            <br/>Loading...
                    </label>
                }
                {!isLoading && queries.map((value, index) => {
                    let newText = value.split('\\n').map(str => {
                        return <p className="queries">{str}</p>
                    });
                    return (
                        <div>
                            {newText}
                            <br />
                        </div>
                    );
                })}
                {!isLoading && topics.map((value, index) => {
                    return <p className="topics">{value}</p>;
                })}
            </div>
        </div>
    );
}

export default InputForm;