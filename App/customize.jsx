function Customize() {
    return (
        <div>
            <Heading id="Customize" label="Customize"/>
            <CustomInputs/>
        </div>

    );
}

class CustomInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-4 mb-2 text-center font-weight-bold">Identifier</div>
                <div className="col-3 mb-2 text-center font-weight-bold">Condition</div>
                <div className="col-3 mb-2 text-center font-weight-bold">Action</div>
                <div className="col-2 mb-2"></div>
            </div>
            {
                this.state.elements.map(i => {
                    return <div className="row">
                        <div className="col-4 mb-2"><input className="form-control"/></div>
                        <div className="col-3 mb-2"><input className="form-control"/></div>
                        <div className="col-3 mb-2"><input className="form-control"/></div>
                        <div className="col-2 mb-2 text-right">
                            <button type="button" className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                })
            }
            <div className="row">
                <div className="col-12 mb-2 text-left d-flex">
                    <button type="button" className="btn btn-primary"><i className="fas fa-plus"></i> Add</button>
                    <button type="button" className="btn btn-success ml-auto">
                        <i className="fas fa-external-link-alt"></i> Generate
                    </button>
                </div>
            </div>
        </div>
    }
}