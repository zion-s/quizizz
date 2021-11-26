import React, { useState } from "react";
import Post from "./Post";

export default function Main(props) {
  const [collapse, setcollapse] = useState(true);

  function setView(val) {
    setcollapse(val);
  }
  function checkReplies(replies) {
    if (replies === undefined) return null;
    else
      return (
        !collapse &&
        replies.map((msg, i) => {
          return (
            <div className="post" key={`${msg.author}_${msg.text}_${i}`}>
              <Post
                author={msg.author}
                text={msg.text}
                setView={setView}
                collapse={collapse}
              />
              {checkReplies(msg.replies)}
            </div>
          );
        })
      );
  }
  return (
    <>
      <div className="post">
        <Post
          author={props.author}
          text={props.text}
          setView={setView}
          collapse={collapse}
        />
        {checkReplies(props.replies)}
      </div>
    </>
  );
}
