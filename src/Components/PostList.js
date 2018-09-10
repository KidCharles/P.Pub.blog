import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import "../App.css";
import map from "../assets/map.png";
import "./Blog.css";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      search: ""
    };
  }
  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }
  handleSearch = val => {
    this.setState({ search: val });
  };

  render() {
    let { posts, search } = this.state;
    let mappedPost = posts
      .filter((e, i) => {
        return e.title.includes(search);
      })
      .map((e, i) => {
        return (
          <Link to={`/post/${e.id}`}>
            <div className="post_card">
              <div className="post_contents">
                <h1 className="post_title" key={i}>
                  "{e.title}"
                </h1>
                <h4 className="post_date">{e.date}</h4>
              </div>
            </div>
          </Link>
        );
      });
    return (
      <div className="post_wrapper">
        <Nav />
        <div className="textContainer backgroundPhoto">
          <input
            type=""
            className=""
            placeholder="search"
            value={this.state.search}
            onChange={e => this.handleSearch(e.target.value)}
          />
          <div >
            {mappedPost}
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
