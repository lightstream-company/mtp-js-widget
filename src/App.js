import './Wall.css';
import React from 'react';
import { connect } from 'react-redux';

function Wall(props) {
  const {posts, permalink} = props;

  return <div className="wall">
    {posts.map((post, i) => {
      return <div key={i} className="post">
        <img src={post.user.profile_picture} alt="" />
        <h2>@{post.user.name}</h2>
        <p>{post.text}</p>
        <p>{post._source}</p>
        <a className="fullsize" target="_blank" href={permalink(post._id)} />
      </div>;
    })}
  </div>;
}

export default connect((posts) => {
  return {
    posts
  };
})(Wall);
