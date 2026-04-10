import React from "react";
import { ArrowRight } from "lucide-react";
function RightCardContent(props) {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8">
      <h1 className="bg-white text-1xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h1>
      <div>
        <p className="text-lg leading-relaxed mb-14 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vel
          debitis autem magni at iusto quam magnam omnis dicta distinctio?
        </p>
        <div className="flex">
          <button
            style={{ backgroundColor: props.color }}
            className="bg-blue-600 text text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button className="bg-blue-600 text text-white font-medium px-3 py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent;
