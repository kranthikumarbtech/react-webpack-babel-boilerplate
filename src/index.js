import React from 'react';
import ReactDOM from 'react-dom';

const target = document.getElementById('app-root');
const title = "My first app with webpack and babel";

ReactDOM.render(
    <div>{title}</div>,
    target
);
console.log("Bootstraped My App");