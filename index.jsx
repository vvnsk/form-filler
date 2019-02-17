// Obtain the root
const rootElement = document.getElementById('root');

// Create a function to wrap up your component
function App() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="h-100">
            <nav className="navbar navbar-expand-sm bg-dark position-fixed w-100">
                <a className="navbar-brand text-white" href="#">Form Filler <i className="fas fa-meteor"></i></a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Fillers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Customize</a>
                    </li>
                </ul>
            </nav>
            <header className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
                <h1>Form Filler</h1>
                <p>A Customizable Bookmarklet tool to fill up forms in seconds!</p>
                <p>To install, click and drag the buttons with <b><i className="fas fa-meteor"></i></b> icon to your
                    browser’s bookmarks toolbar.</p>
            </header>


            <div className="container-fluid">
                {a.map(i => {
                    return <p class="p-4">Some example text. Some example text. Some example text. Some example text.
                        Some example
                        text</p>
                })}
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p class="mb-0">
                            <strong>Form Filler</strong> by <a href="http://vinnakota.co.in">Saikrishna Vinnakota!</a>
                        </p>
                        <p class="mb-0">
                            Report <a className="icon"
                                      href="https://github.com/vvnsk/form-filler/issues">issue</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}


// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <App/>,
    rootElement
);