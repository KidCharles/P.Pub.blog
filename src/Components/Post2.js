import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default function Post2(props) {
  return (
    <div className="post_card">
      <img width="100px" src={props.e.pic} alt="uploaded" />

      <span className="post_title">{props.e.title}</span>
      <br/>
      <br/>
      <br/>
      <h4>Thomas Atchison</h4>
      <br/>
      <span className="">{props.e.date}</span>
      <div>
        <div onClick={props.dropDownToggleFn.bind(null, props.e, props.i)}>
          ...
        </div>
        <div className="" style={{ display: props.dropDown ? "flex" : "none" }}>
          <Link to={`/post/${props.e.id}`}>
            <span onClick={props.editActiveFn.bind(null, props.e, props.i)}>
              Edit
            </span>
          </Link>
        </div>
      </div>
      <div className="post_content">
      <p>{props.e.text}</p>
        </div> 
    </div>
  );
}
