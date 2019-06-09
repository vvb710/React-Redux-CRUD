import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.refs.editedTitle.value;
        const newMessage = this.refs.editedPost.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref="editedTitle"
                        defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref="editedPost"
                        defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );

    }
}

export default connect()(EditComponent);