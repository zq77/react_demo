const React = require('react');

// ============= 1 ======================
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
// ============= 2 ======================
// class HelloMessage extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <h1>Hello {this.props.name}!</h1>;
//     }
// }
// ============= 3 ======================
// const HelloMessage = (props) => {
//     return <h1>Hello {props.name}!</h1>;
// }

module.exports = HelloMessage;