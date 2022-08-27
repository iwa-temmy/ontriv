import React from 'react'

const PostHeader = ({title,className, style}) => {
  return (
    <h1 className={className || "postTitle"} style={style}>{title}</h1>
  )
}

export default PostHeader