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
      posts: [
        {
          id: 1,
          title: "My Day Hiking",
          date: "Aug 23, 1999",
          pic:
            "https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a5a0274b9369b648503a73d3e5dc7c6&auto=format&fit=crop&w=800&q=60",
          text:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        }
      ]
    };
  }

  componentDidMount() {
    // this.getPosts();
    this.props.getPosts();
  }

  getPosts = () => {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  };

  render() {
    console.log(this.props.posts);
    // const { posts } = this.state;
    let mappedPosts = this.props.posts.map((e, i) => {
      return (
        <Post
          id={e.id}
          title={e.title}
          date={e.date}
          pic={e.pic}
          text={e.text}
          key={i + e.id}
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
