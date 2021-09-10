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
- `${}`
```
String.format("xxx %s xxx", item.getId())
"xxx" + item.id + "xxx"
`xxx ${item.id} xxx`
```

### JSX
please refer main.jsx
```
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```

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
    return <span>Hello {this.props.name}!</span>;
  }
}
ReactDOM.render(
    <Welcome name="Runobb">,
    document.getElementById('example')
);
```
- different
```
state and lifecyle (version < 16.8)
props and this.props
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

### lifecycle
please refer lifecycle.jsx
![lifecycle](https://upload-images.jianshu.io/upload_images/24637570-202329d84d437ba0.jpg)

### Form
please reference chat.jsx

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

### Composition
please reference dialog.jsx
```
props.children
```