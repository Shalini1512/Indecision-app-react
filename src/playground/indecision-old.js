const app = {
    title: 'Indecision',
    subtitle: 'let us make decisions for you',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeOptions = () => {
    app.options = [];
    renderApp();
};

const makeChoice = () => {
    const index = Math.floor(Math.random()*app.options.length);
    const option = app.options[index];
    alert(option);
};

const appRoot = document.getElementById('app');
let casa = false;

const toggleCase = () => {
    casa = !casa;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={toggleCase}>{casa ? 'hide' : 'show'}</button>
            {casa && <p>Show me what you got</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={makeChoice} disabled={app.options.length === 0}>Make my choice</button>
            <button onClick={removeOptions}>remove all</button>
            <ol>
                {
                    app.options.map((opt) => {
                        return <li key={opt}>{opt}</li>;
                    })
                }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>+</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();