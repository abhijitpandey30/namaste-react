// const heading = React.createElement('h1', {id:'heading'}, 'Hello World from React!');
// console.log(heading); // This is 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root)
// root.render(heading);

/*
    <div id="parent">
        <div id="child">
            <h1 id="head">I'm in h1 tag</h1>
        </div>

    </div>

*/

const parent = React.createElement('div', {id:'parent'}, 
    React.createElement('div', {id:'child'}, [
        React.createElement('h1', {id:'head1'}, "I'm in h1 tag"),
        React.createElement('h2', {id:'head2'}, "I'm in h2 tag")
    ]

        ));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);