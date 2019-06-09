import React from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import './style/index.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                <PostForm />
                <AllPost />
            </div>
        );
    }
}

export default App;