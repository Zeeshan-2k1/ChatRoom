import React from 'react';
import Chat from './Chats/Chat';
import Join from './Join/Join';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Route exact path='/' component={Join} />
            <Route exact path='/chat' component={Chat} />
        </Router>
    ) 
}

export default App;