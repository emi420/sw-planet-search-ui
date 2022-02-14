import React from 'react';
import "./Loading.css";

/*
  Simple loading message
*/
const Loading = function ({ visible }) {
    return (
        <div className="loadingText">{ visible && "Loading ..."}</div>
    )
}

export default Loading;
