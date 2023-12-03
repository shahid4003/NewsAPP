import axios, * as others from "axios";
import React, { useEffect, useState } from "react";
const Card = ({ api_data }) => {
  return (
    <>
      <div className=" w-11/12 mx-auto py-48">
        <div className="grid grid-cols-4 gap-8">
          {api_data.map((card) => (
            <div className="max-w-sm  overflow-hidden border-2 rounded-2xl p-4">
              <img
                className="w-full min-h-[13rem] max-h-[13rem] mb-8 rounded-2xl"
                src={card.urlToImage || "https://via.placeholder.com/150"}
                alt="Sunset in the mountains"
              />
              <div className="font-bold text-xl mb-2 line-clamp-3">
                {card.content}
              </div>
              <p className="text-gray-700 text-base line-clamp-[4]">
                {card.description}
              </p>
              <div className=" pt-4 ">
                <span className="  py-1 text-sm font-semibold opacity-50 mr-2 mb-2">
                  author: {card.author}
                </span>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default Card;
