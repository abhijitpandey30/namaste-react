
import React from "react";
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div', {id:'parent'}, 
    React.createElement('div', {id:'child'}, [
        React.createElement('h1', {id:'head1'}, "I'm in h1 tag 🚀"),
        React.createElement('h2', {id:'head2'}, "I'm in h2 tag")
    ]

        ));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);