"use client"
import React from 'react';

const HomeStats = ({ data, slug, ...props }) => {
  return (
    <div className={`home-stats-widget py-12  bg-indigo-100`}>
      <div className="container">
        {console.log(data,"sdfsdf")}
        
        <div className="grid grid-cols-4 gap-4">
        {data?.items?.map((item, idx) => (
          <div
            key={idx}
            className="gap-3"
          >
            <div className="text-transparent bg-gradient-to-b from-[#000] to-[#1F6DF3] bg-clip-text text-6xl 2xl:text-7xl font-semibold leading-[72px]">
              {item?.title}
            </div>
            <div className=" text-black/75 text-xl 2xl:text-2xl font-normal ">
              {item?.description}
            </div>
          </div>
        ))}
        </div>
      </div>
      {/* <h2>HomeStats Widget</h2> */}
      {/* Widget content here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
};

export default HomeStats; 