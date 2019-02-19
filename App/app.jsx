// App
function App() {
    return (
        <div className="h-100 main">
            <AppHeader/>
            <AppNav/>
            <Fillers/>
            <Customize/>
            <AppFooter/>
        </div>
    )
}

// Header
function AppHeader() {
    return (
        <header className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Form Filler</h1>
            <p>A Customizable Bookmarklet tool to fill up forms in seconds!</p>
            <p>To install, click and drag the buttons with <b><i className="fas fa-meteor"></i></b> icon to your
                browser’s bookmarks toolbar.</p>
        </header>
    );
}

// Navigation
function AppNav() {
    return (
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
    );
}

//Footer
function AppFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p className="mb-0">
                        <strong>Form Filler</strong> by <a href="http://vinnakota.co.in">Saikrishna Vinnakota!</a>
                    </p>
                    <p className="mb-0">
                        Report <a className="icon"
                                  href="https://github.com/vvnsk/form-filler/issues">issue</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}