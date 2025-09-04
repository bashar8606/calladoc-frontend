"use client"
import React from 'react';

const HomeStats = ({ data, slug, ...props }) => {
  return (
    <div className={`home-stats-widget py-[40px] md:py-12  ${data?.hasBg&&"bg-indigo-100"}`}>
      <div className="container">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.items?.map((item, idx) => (
          <div
            key={idx}
            className="gap-3"
          >
            <div className="text-transparent bg-gradient-to-b from-[#000] to-[#1F6DF3] bg-clip-text text-3xl md:text-6xl 2xl:text-7xl font-semibold md:leading-[72px]">
              {item?.title}
            </div>
            <div className=" text-black/75 text-sm md:text-xl 2xl:text-2xl font-normal ">
              {item?.description}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStats; 