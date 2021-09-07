const React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}/>
            </div>
        );
    }
}


class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    UNSAFE_componentWillMount() {
        // 渲染前调用
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        // 在第一次渲染后调用, 之后组件已经生成了对应的DOM结构
        console.log('Component DID MOUNT!')
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        // 在组件接收到一个新的 prop (更新后)时被调用
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        // 在组件接收到新的props或者state但还没有render时被调用
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        // 在组件完成更新后立即调用
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        // 在组件从 DOM 中移除之前立刻被调用
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

module.exports = Button;