import React, { Component } from "react";
import Nav from "./Nav";
import Post2 from "./Post2";
import { connect } from "react-redux";
import axios from "axios";
import { getPosts, deletePost } from "../ducks/reducer";
import "./Post.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      dropDown: false
    };
    this.dropDownToggle = this.dropDownToggle.bind(this);
  }
  componentDidMount() {
    this.props.getPosts();
  }
  editActive = () => {
    this.setState({ editing: true, dropDown: false });
  };
  editInactive = () => {
    this.setState({ editing: false });
  };

  dropDownToggle = () => {
    this.setState({ dropDown: !this.state.dropDown });
  };

  dropDownInactive = () => {
    if (this.state.dropDown) {
      this.setState({ dropDown: false });
    }
  };

  render() {
    const { editing, dropDown } = this.state;
    let mappedPosts = this.props.posts.map((e, i) => {
      return (
        <div key={i}>
        <Post2
          e={e}
          i={i}
          dropDown={dropDown}
          editActiveFn={this.editActive}
          dropDownToggleFn={this.dropDownToggle}
          editing={editing}
          dropDownInactiveFn={this.dropDownInactive}
          />
        </div> 
      );
    });
    return (
      <div className="post_wrapper ">
        <Nav />
        <div className="textContainer backgroundPhoto">
        {mappedPosts}
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect( mapStateToProps,{ getPosts, deletePost })(Posts);
