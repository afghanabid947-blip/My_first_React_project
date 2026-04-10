import React from "react";

import RightCardContent from "./RightCardContent";
function RightCard(props) {
  return (
    <div className="h-full bg-amber-300 w-80 shrink-0 relative rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover " src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
}

export default RightCard;
