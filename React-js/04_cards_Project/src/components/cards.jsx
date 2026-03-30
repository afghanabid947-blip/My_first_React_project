import React from "react";
import { Bookmark } from "lucide-react";
const cards = () => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://i.pinimg.com/736x/09/a1/1b/09a11bf7d3b75dd36cd3a2089828c7f3.jpg"
          alt=""
        />
        <button>
          Save <Bookmark size={11} strokeWidth={2} />
        </button>
      </div>
      <div className="center">
        <h1>
          Amazon <span>5 days ago</span>
        </h1>
        <h2>Senior UI/UX Designer</h2>
        <div className="tag">
          <h4>Part time</h4>
          <h4>Senior level</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$130/hour</h3>
          <p>Dera, Pakistan</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};
export default cards;
