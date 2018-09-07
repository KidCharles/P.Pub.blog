import React from "react";

export default function Post(props) {
  return (
    <div className="post_card">
      <img width="100px" src={props.pic} alt='uploaded'/>
      <span className="">{props.title}</span>
      <h4>Thomas Atchison</h4>
      <span className="">{props.date}</span>
      <br />
      <br />
      <p className="">{props.text}</p>
    </div>
  );
}
