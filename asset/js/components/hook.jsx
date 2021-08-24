const React = require('react');

// refactor lifecycle
function Content(props) {
    // React.useEffect(()=>{
    //     console.log('Component DID MOUNT! - no param');
    // });
    // React.useEffect(()=>{
    //     console.log('Component DID UPDATE!');
    // },[props.myNumber]);
    //
    // React.useEffect(()=>{
    //     console.log('Component DID MOUNT with []!');
    //     return function cleanup() { console.log('Component WILL UNMOUNT!')};
    // },[]);
    React.useEffect(()=>{
        console.log('Component DID UPDATE!');
        return function cleanup() { console.log('Component WILL UNMOUNT!')};
    });
    return (
        <div>
            <h3>{props.myNumber}</h3>
        </div>
    );
}
// class Content extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentWillMount() {
//         // 渲染前调用
//         console.log('Component WILL MOUNT!')
//     }
//     componentDidMount() {
//         // 在第一次渲染后调用, 之后组件已经生成了对应的DOM结构
//         console.log('Component DID MOUNT!')
//     }
//     componentWillReceiveProps(newProps) {
//         // 在组件接收到一个新的 prop (更新后)时被调用
//         console.log('Component WILL RECEIVE PROPS!')
//     }
//     shouldComponentUpdate(newProps, newState) {
//         return true;
//     }
//     componentWillUpdate(nextProps, nextState) {
//         // 在组件接收到新的props或者state但还没有render时被调用
//         console.log('Component WILL UPDATE!');
//     }
//     componentDidUpdate(prevProps, prevState) {
//         // 在组件完成更新后立即调用
//         console.log('Component DID UPDATE!')
//     }
//     componentWillUnmount() {
//         // 在组件从 DOM 中移除之前立刻被调用
//         console.log('Component WILL UNMOUNT!')
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>{this.props.myNumber}</h3>
//             </div>
//         );
//     }
// }
function Button() {
    const [data, setNewNumber] = React.useState(0);
    return (
        <div>
            <button onClick={() => setNewNumber(data + 1)}>INCREMENT</button>
            <Content myNumber={data}/>
        </div>
    );
}
// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {data: 0};
//         this.setNewNumber = this.setNewNumber.bind(this);
//     }
//
//     setNewNumber() {
//         this.setState({data: this.state.data + 1})
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.setNewNumber}>INCREMENT</button>
//                 <Content myNumber = {this.state.data}/>
//             </div>
//         );
//     }
// }

module.exports = Button;