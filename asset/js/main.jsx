import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ListComponent from './components/list.jsx';
import BasicComponent from './components/basic.jsx';
import Lifecycle from './components/lifecycle.jsx';
import HookLifecycle from './components/hook.jsx';
import ChatComponent from './components/chat.jsx';
import {LazyComponent} from './components/lazy.jsx';
import '../css/main.less';


class AppComponent extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/index">index</Link></li>
                            <li><Link to="/lifecycle">Lifecycle component</Link></li>
                            <li><Link to="/basic">basic component</Link></li>
                            <li><Link to="/list">list component</Link></li>
                            <li><Link to="/chat">chat component</Link></li>
                            <li><Link to="/lazy">lazy component</Link></li>
                            <li><Link to="/hook">hook component</Link></li>
                        </ul>
                    </nav>
                    <Route path="/index" component={() => <div> This is a React component index! </div>}/>
                    <Route path="/lifecycle" component={Lifecycle}/>
                    <Route path="/basic" component={(props) => <BasicComponent name="test" {...props}/>}/>
                    <Route path="/list" component={ListComponent}/>
                    <Route path="/chat" component={ChatComponent}/>
                    <Route path="/lazy" component={LazyComponent}/>
                    <Route path="/hook" component={HookLifecycle}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('reactApp'));