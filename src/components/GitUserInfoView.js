import React, { useState } from "react";


const GitFetchView = (props) => {

    const {gitUser} = props.gitUser;
  
    return (
        <div>
            GitFetchView
            <pre>
                {JSON.stringify(gitUser, null, 2)}
            </pre>
        </div>
    )
}

export default GitFetchView;