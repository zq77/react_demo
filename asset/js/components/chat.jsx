const React = require('react');

const MessageContext = React.createContext({});

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ""}
    }
    handleChange = (event) => {
        this.setState({content: event.target.value})
    }
    render() {
        return (
            <div>
                <div>user: {this.props.user}</div>
                <MessageContext.Consumer>
                    {({messages, sendMsg}) => (
                        <div>
                            <div>
                                {messages.map((msg, index) =>
                                    <div key={index}>{msg.user} : {msg.content}</div>
                                )}
                            </div>

                            <div>
                                <textarea value={this.state.content} onChange={this.handleChange} />
                                <button onClick={() => {this.setState({content: ""});
                                    sendMsg({user: this.props.user, content: this.state.content});}}>Send</button>
                            </div>
                        </div>
                    )}
                </MessageContext.Consumer>
            </div>
        );
    }
}

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: ""}
        // this.loginInputRef = React.createRef();
        this.loginInput = null
        this.setLoginInputRef = element => {
            this.loginInput = element;
        };
    }

    handleLogin = () => {
        // console.log(this.refs.loginInput);
        // console.log(this.loginInputRef.current.value);
        console.log(this.loginInput.value);
        this.setState({user: this.loginInput.value})
    }

    render() {
        return (
            this.state.user ?
                <div className="">
                    <ContentComponent user={this.state.user}/>
                </div>
                :
                <div>
                    {/*<input type="text" ref={this.loginInputRef} />*/}
                    <input type="text" ref={this.setLoginInputRef} />
                    <br/>
                    <button onClick={this.handleLogin}>login</button>
                </div>
        );
    }
}

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            sendMsg: (msg) => {
                console.log("msg :" + msg)
                this.setState({messages: [...this.state.messages, msg]})
            }
        }
    }

    render() {
        return (
            <MessageContext.Provider value={this.state}>
                <div className="chat">
                    <div className="window">
                        <LoginComponent/>
                    </div>
                    <div className="window">
                        <LoginComponent/>
                    </div>
                </div>
            </MessageContext.Provider>
        );
    }
}

module.exports = ChatComponent;