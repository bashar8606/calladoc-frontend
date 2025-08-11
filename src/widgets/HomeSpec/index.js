"use client"
import React from 'react';

const HomeSpec = ({ data, slug, ...props }) => {
  return (
    <div className={`home-spec-widget `}>
      <h2>HomeSpec Widget</h2>
      {/* Widget content here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default HomeSpec; 