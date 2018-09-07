import React from "react";

export default function Post(props) {
  const {e,i}= props;
  return (
    <div className="post_card" onClick={props.dropDownInactiveFn} >
      <img width="100px" src={props.pic} alt="uploaded" />
      <span className="">{props.title}</span>
      <h4>Thomas Atchison</h4>
      <span className="">{props.date}</span>
      <div>
        <div onClick={ props.dropDownToggleFn.bind(null, e, i) }>...</div> 
        <div className="" style={{ display: props.dropDown ? "flex" : "none" }}>
          <span onClick={props.editActiveFn.bind(null, e, i)}>Edit</span>
          <span onClick={props.deletPostFn.bind(null, e, i)}>Delete</span>
        </div>
      </div>
      <br />
      <br />
      {
       props.editing
       ?
        <section>
          <textarea placeholder={props.text} onChange={(e)=>  props.updateTextFn(e.target.value)} />
          <button type='' className=''onClick={()=> props.updatePostFn(e.id)}>Save</button>
          <button type='' className=''onClick={()=> props.editInactiveFn() }>Cancel</button>
        </section>
       :
      <span className="">{props.text}</span>
      }
    </div>
  );
}
