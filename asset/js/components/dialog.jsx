import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="body">
                    {this.props.children}
                </div>
                <div className="footer">
                    <button>ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}
const HelloWorldDialog = (props) => {
    return (
        <Dialog>
            <h1>hello world!</h1>
        </Dialog>
    )
}
export {HelloWorldDialog}