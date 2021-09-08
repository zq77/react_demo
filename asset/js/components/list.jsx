const React = require('react');

let prodList = [
    {id: 1, name: "test1"},
    {id: 2, name: "test2"},
    {id: 3, name: "test3"},
    {id: 4, name: "test4"}
]

function ListItem(props) {
    return (
        <div style={{display: 'block'}}>
            <span>{props.id}</span>
            <span>|</span>
            <span>{props.name}</span>
            <span>|</span>
            <button onClick={props.onRemoveItem.bind(this, props.id)}>remove</button>
        </div>
    );
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: prodList};
        // this.createItem = this.createItem.bind(this)
    }

    removeItem = (i) => {
        console.log(i);
        console.log(this.state);
        this.setState(state => ({
            list: state.list.filter(item => item.id !== i)
        }));
    }

    createItem() {
        console.log(this.state);
        let lastItem = {"id": 0};
        if (this.state.list.length > 0) {
            lastItem = this.state.list[this.state.list.length - 1];
        }
        this.setState(state => ({
            list: state.list.concat({id: lastItem.id + 1, name: `test${lastItem.id + 1}`})
            // list: [...state.list, {id: lastItem.id + 1, name: `2test${lastItem.id + 1}`}]
        }));
    }

    render() {
        const content = this.state.list.map((item) =>
            <ListItem key={item.id} id={item.id} name={item.name} onRemoveItem={this.removeItem}/>
        );
        return (
            <div>
                {content}
                <button onClick={this.createItem.bind(this)}>Create</button>
                {/* <button onClick={this.createItem}>Create</button> */}
                {/* <button onClick={() => this.createItem()}>Create</button> */}
            </div>
        );
    }
}

module.exports = List;