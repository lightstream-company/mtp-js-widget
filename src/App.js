import './Wall.css';
import React from 'react';
import { connect } from 'react-redux';

export default connect((posts) => {
  return {
    posts
  };
})(function Wall(props) {
  const {posts, permalink} = props;

  return <div className="wall">
    {posts.map((post, i) => {
      return <div key={i} className="post">
        <h2>@{post.user.name}</h2>
        <p>{post.text}</p>
        <a className="fullsize" target="_blank" href={permalink(post._id)} />
      </div>;
    })}
  </div>;
});
