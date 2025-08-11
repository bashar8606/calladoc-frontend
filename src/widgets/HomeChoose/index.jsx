"use client"
import React from 'react';
import styles from './HomeChoose.module.scss';

const HomeChoose = ({ data, slug, ...props }) => {
  return (
    <div className={`home-choose-widget ${styles.container || ''}`}>
      <h2>HomeChoose Widget</h2>
      {/* Widget content here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default HomeChoose; 