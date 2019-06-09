import React from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';


class App extends React.Component {

    render() {
        return (
            <div>
                <PostForm />
                <AllPost />
            </div>
        );
    }
}

export default App;