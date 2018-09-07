import React, { Component } from "react";
import Nav from "./Nav";
import Post from "./Post";
import { connect } from "react-redux";
import axios from "axios";
import { getPosts } from "../ducks/reducer";
import "./Post.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: 0,
      title: "",
      date: "",
      pic: "",
      text: "",
      editing: false,
      dropDown: false
    };
    this.dropDownToggle=this.dropDownToggle.bind(this);
  }
  componentDidMount() {
    // this.getPosts();
    this.props.getPosts();
  }

  // getPosts = () => {
  //   axios.get("/api/posts").then(res => {
  //     this.setState({ posts: res.data });
  //   });
  // };

  updateText = (val)=> {
    this.setState({text:val})
  }

  updatePost(id) {
    const { text } = this.state;
    axios.put(`/api/posts?id=${id}`, { text }).then(res => {
      this.setState({ posts: res.data });
    });
  }

  deletPost(id) {
    axios.delete(`/api/posts?id=${id}`).then(res => {
      this.setState({ posts: res.data });
    });
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
    console.log(this.state)
    const { editing, dropDown } = this.state;
    let mappedPosts = this.props.posts.map((e, i) => {
      return (
        <Post
          e={e}
          i={i}
          id={e.id}
          title={e.title}
          date={e.date}
          pic={e.pic}
          text={e.text}
          key={i + e.id}
          dropDown={dropDown}
          editActiveFn={this.editActive}
          dropDownToggleFn={this.dropDownToggle}
          deletPostFn={this.deletPost}
          editing={editing}
          updatePostFn={this.updatePost}
          editInactiveFn={this.editInactive}
          updateTextFn={this.updateText}
          dropDownInactiveFn={this.dropDownInactive}
        />
      );
    });
    return (
      <div className="post_wrapper">
        <Nav />
        {mappedPosts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
