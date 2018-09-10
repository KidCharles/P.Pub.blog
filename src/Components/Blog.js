import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { addPost } from "../ducks/reducer";
import axios from "axios";
import "./Blog.css";
import map from "../assets/map.png";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      pic: "",
      text: ""
    };
  }

  handleTitle = val => {
    this.setState({ title: val });
  };
  handleDate = val => {
    this.setState({ date: val });
  };
  handlePic = val => {
    this.setState({ pic: val });
  };
  handleText = val => {
    this.setState({ text: val });
  };

  publishPost = e => {
    e.preventDefault();
    let body = {
      title: this.state.title,
      date: this.state.date,
      pic: this.state.pic,
      text: this.state.text
    };
    !body.title || !body.pic || !body.text
      ? alert("Please fill out everything!")
      : axios.post("/api/publish", body).then(post => {
          this.props.addPost(post.data);
          if (post.status === 200) {
            this.setState(
              {
                title: "",
                date: "",
                pic: "",
                text: ""
              },
              () => alert("successfully Added")
            );
          }
        });
  };

  render() {
    return (
      <div className="post_wrapper">
        <Nav />
        <div className="backgroundPhoto">
          <div className="textContainer">
            <input
              type="text"
              className=""
              placeholder="title"
              onChange={e => this.handleTitle(e.target.value)}
              value={this.state.title}
            />
            <input
              type="date"
              className=""
              placeholder="date"
              onChange={e => this.handleDate(e.target.value)}
              value={this.state.date}
            />
            <input
              type="text"
              className=""
              placeholder="picture here"
              onChange={e => this.handlePic(e.target.value)}
              value={this.state.pic}
            />
            <textarea
              // style={{
              //   fontFamily: this.props.fontFamily,
              //   color: this.props.fontColor,
              //   fontSize: this.props.fontSize,
              // }}
              onChange={e => this.handleText(e.target.value)}
              value={this.state.text}
              placeholder="Start typing your thoughts here!"
              cols="90"
              rows="30"
            />
            {/* <img src={map} alt="map" className="map" /> */}
            <div
              className="wht_button"
              width="100px"
              onClick={e => this.publishPost(e)}
            >
              Publish Post
            </div>
          </div>
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

export default connect(
  mapStateToProps,
  { addPost }
)(Blog);
