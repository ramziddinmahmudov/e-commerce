import React, { useState } from "react";
import { BiUserCircle, BiComment, BiShare } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Like2.css";
function Like() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  const imageUrl =
    "data:image/jpeg;base64,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";
  return (
    <>
      <div className="main-container">
        <h3 className="text-info">POST LIKE APP</h3>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            <BiUserCircle /> UserName
          </div>

          <img
            src={imageUrl}
            alt="post-img"
            height={"300px"}
            width="100%"
            onDoubleClick={handleLikes}
          />

          <div className="card-footer">
            {like ? (
              <AiFillHeart
                size={30}
                className="text-danger"
                onClick={handleLikes}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <AiOutlineHeart
                size={30}
                onClick={handleLikes}
                style={{ cursor: "pointer" }}
              />
            )}
            <h4>{count}</h4>
            &nbsp;
            <BiComment size={30} />
            &nbsp;
            <BiShare size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Like;
