import React from "react";
import "../App.css";

export default function Post(props) {
  return (
    <div className="post_container">
      {!props.collapse && (
        <div className="scope_line" onClick={() => props.setView(true)}></div>
      )}
      <div>
        <div>
          {props.collapse && (
            <span
              onClick={() => props.setView(false)}
              style={{ cursor: "pointer" }}
            >
              {"<-->"}
            </span>
          )}
          <span>
            <img src={props.author.avatar} width={50} />
          </span>
          <span>{props.author.name}</span>
        </div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}
