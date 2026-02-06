import React from "react";

const Card = ({ name, gender, designation, summary, rating }) => {
  return (
    <div className="child">
      <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <h4>
        {name}, {gender}
      </h4>
      <hr />
      <p>{designation}</p>
      <p>{summary}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Card;
