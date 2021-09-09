import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {List as ListComponent} from './components/list.jsx';
import BasicComponent from './components/basic.jsx';
import {Button as Lifecycle} from './components/lifecycle.jsx';
import HookLifecycle from './components/hook.jsx';
import ChatComponent from './components/chat.jsx';
import {LazyComponent} from './components/lazy.jsx';
import {HelloWorldDialog as DialogComponent} from './components/dialog.jsx';
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
                            <li><Link to="/dialog">dialog component</Link></li>
                            <li><Link to="/lazy">lazy component</Link></li>
                            <li><Link to="/hook">hook component</Link></li>
                        </ul>
                    </nav>
                    <Route path="/index" component={() => <div> Hello world! </div>}/>
                    <Route path="/basic" component={(props) => <BasicComponent name="test" {...props}/>}/>
                    <Route path="/lifecycle" component={Lifecycle}/>
                    <Route path="/list" component={ListComponent}/>
                    <Route path="/dialog" component={DialogComponent}/>
                    <Route path="/chat" component={ChatComponent}/>
                    <Route path="/lazy" component={LazyComponent}/>
                    <Route path="/hook" component={HookLifecycle}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('reactApp'));