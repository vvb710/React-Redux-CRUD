import React, { Component } from 'react';
import { connect } from 'react-redux';




class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.refs.getPostTitle.value;
        const message = this.refs.getPostMessage.value;

        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.refs.getPostTitle.value = '';
        this.refs.getPostMessage.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter Post Title" ref="getPostTitle" /><br /><br />
                    <textarea required rows="5" cols="30" placeholder="Enter Post" ref="getPostMessage" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);