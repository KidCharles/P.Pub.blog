import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../ducks/reducer";
import map from '../assets/map.png';
class Postt extends Component {
  constructor() {
    super();

    this.state = {
      post: [],
      textEdit: ""
    };
  }

  componentDidMount() {
    return axios.get(`/api/posts/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        post: res.data
      });
    });
  }

  editText = val => {
    this.setState({ textEdit: val });
  };

  updatePost = id => {
    console.log(id);
    let text = this.state.textEdit;
    axios.put(`/api/posts/${id}`, { text }).then(res => {
      this.setState({ post: res.data });
      alert("Your Post has been edited!");
    });
  };

  deletePost(id) {
    this.props.deletePost(id);
    alert("Your Post has been deleted!");
    this.props.history.push("/posts");
  }

  render() {
    console.log(this.state);
    let mappedPost = this.state.post.map((e, i) => {
      return (
        <div key={i} className="post_card">
          <div>
            <img src={e.pic} alt="" width="100px" />
            <span className="post_title">{e.title} </span>
            <span className="">{e.date} </span>
          </div>
          <textarea
            type="text"
            className=""
            defaultValue={e.text}
            onChange={e => this.editText(e.target.value)}
            cols="90"
            rows="30"
          />
          <div className="">
            <div className="wht_button" onClick={() => this.deletePost(e.id)}>
              delete
            </div>
            <div className="wht_button" onClick={() => this.updatePost(e.id)}>
              save
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="post_wrapper ">
        <Nav />
        <div className="textContainer backgroundPhoto">
        
          <Link to="/postlist">
            <div type="" className="wht_button">
              Back
            </div>
          </Link>

          <div className="">{mappedPost}</div>
        </div>
        {/* <img src={map} alt="map" className="map" /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost }
)(Postt);
