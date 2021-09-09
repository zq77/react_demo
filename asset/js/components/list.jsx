import React from 'react';

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

// key example
class Item extends React.Component {
    render() {
        return (
        <div className="form-group">
            <label className="col-xs-4 control-label">{this.props.name}</label>
            <div className="col-xs-8">
            <input type='text' className='form-control' />
            </div>
        </div>
        )
    }
}

class KeyExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {name: 'Foo1444610101010', id: 1444610101010},
                {name: 'Bar1444600000000', id: 1444600000000}
            ]
        };
    }

    addItem() {
        const id = +new Date;
        this.setState({
        list: [ {name: 'Baz' + id, id} , ...this.state.list]
        });
    }

    render() {
        return (
        <div>
            <b>How to use: </b>
            First write something in the inputs.
            Then hit <em>Add item</em> and see what happens…
            <hr/>
            <button className='btn btn-primary' onClick={this.addItem.bind(this)}><b>Add item</b> to the beginning of the list</button>
        

            <h3>Dangerous <code>key=index</code></h3>
            <form className="form-horizontal">
                {this.state.list.map((todo, index) =>
                <Item {...todo}  key={index} />
                )}
            </form>
            

            <h3>Better <code>key=id</code></h3>
            <form className="form-horizontal">
                {this.state.list.map((todo) =>
                <Item {...todo} key={todo.id} />
                )}
            </form>
        </div>
        )
    }
}
  
export {List, KeyExample};