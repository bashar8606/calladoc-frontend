"use client"
import React from 'react';
import styles from './HomeBlogs.module.scss';

const HomeBlogs = ({ data, slug, ...props }) => {
  return (
    <div className={`home-blogs-widget ${styles.container || ''}`}>
      <h2>HomeBlogs Widget</h2>
      {/* Widget content here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default HomeBlogs; 