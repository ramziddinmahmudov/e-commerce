import React, { useState } from "react";
import { BiUserCircle, BiComment, BiShare } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./like1.css"
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
