### es6
- let & const
```
var
let
const
```  
- =>
```
function callback(data) {
    ...
}
(data) => {
    ...
}
```
- `${}``
```
String.format("xxx %s xxx", item.getId())
"xxx" + item.id + "xxx"
`xxx {item.id} xxx`
```

### JSX
please refer basic.jsx
```
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```

### lifecycle
https://reactjs.org/docs/react-component.html#lifecycle-methods

### Component
please refer basic.jsx
- function
```
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```
- React.Component
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
ReactDOM.render(
    <Welcome name="Runobb">,
    document.getElementById('example')
);
```
- different
```
1. state and lifecyle (version < 16.8)
2. props and this.props
```

### state
please refer list.jsx
```
init
this.state = {date: new Date()};
update
this.setState()
```

### event
please refer list.jsx
- bind
```
this.handleClick = this.handleClick.bind(this);
onClick={this.handleClick.bind(this)}
```
- =>
```
handleClick = () => {...}
onClick={(e) => this.handleClick(e)}
```

### Refs
please reference chat.jsx
```
this.refs.<inputName> has been deprecated
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
this.myRef = React.createRef();
this.setTextInputRef = element => {
  this.textInput = element;
};
```

### Context
please reference chat.jsx
```
handle gobal state.
React.createContext
Context.Provider
Context.Consumer

other prefence: redux
```