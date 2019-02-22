function Fillers() {
    const a = [1, 2, 3, 4, 5];
    let formFiller = new FillerGenerator();
    return (
        <div className="container-fluid">
            <Heading id="Fillers" label="Fillers" />
            <div className="row mx-2">
            {a.map(i => {
                return (
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <Card heading={"Form"} title={"HTML Form"} text={"To install, click and drag the button below to your bookmarks, and click on the bookmark when you open the form which needs to be filled."} buttonText={'Form Filler'} link={formFiller.fillerScript}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.heading}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="btn btn-primary"><i className="fas fa-meteor"></i> {props.buttonText}</a>
            </div>
        </div>
    )
}