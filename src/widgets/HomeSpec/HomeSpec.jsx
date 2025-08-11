"use client"
import React from 'react';
import styles from './HomeSpec.module.scss';

const HomeSpec = ({ data, slug, ...props }) => {
  return (
    <div className={`home-spec-widget ${styles.container || ''}`}>
      {/* Absolute positioned icon group */}
      <div className="absolute left-0 top-0 flex flex-col items-start gap-2.5">
        <div className="px-5 py-2 bg-white/40 rounded-[90px] backdrop-blur-md flex justify-center items-center gap-2.5">
          {/* First icon - Document */}
          <div className="w-14 h-14 bg-white rounded-[44px] flex justify-center items-center">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-4 left-[1.72px] top-[1.50px] absolute bg-neutral-600" />
              <div className="w-[2.91px] h-[2.91px] left-[6.01px] top-[9.10px] absolute bg-neutral-600" />
            </div>
          </div>
          
          {/* Second icon - Heart */}
          <div className="w-20 h-20 bg-rose-500 rounded-[100px] flex justify-center items-center">
            <div className="w-5 h-5 origin-top-left rotate-[136.50deg] bg-white" />
          </div>
          
          {/* Third icon - Checkmark */}
          <div className="w-14 h-14 bg-white rounded-[62px] flex justify-center items-center">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[1.50px] top-[1.72px] absolute bg-zinc-600" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Widget content */}
      <div className="relative z-10">
        <h2>HomeSpec Widget</h2>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default HomeSpec; 