import React, { useState } from "react";


const GitFetchView = (props) => {
    const [gitName, setGitName] = useState('ab');

    const handleChange = (e) => {
        setGitName(
            e.target.value
        )
    }

    const handleClick = () => {
        props.getGitUser(gitName);
    }
    return (
        <div>
            GitFetchView
            <div>
                <input type="text" onChange={(e) => handleChange(e)} />
                <button onClick={() => handleClick()}>Fetch</button>
            </div>
        </div>
    )
}

export default GitFetchView;