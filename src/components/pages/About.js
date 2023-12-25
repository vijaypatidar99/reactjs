import React from "react";

const About = () => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          Hi this is my about
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
