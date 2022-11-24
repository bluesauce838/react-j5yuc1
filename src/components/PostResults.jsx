

import React from "react";


const PostResults = (props) => {
  const {name} = props.posts
  return(
        <div className="">
          <p className="titles">{name}</p>
        </div>
  )
}

export default PostResults