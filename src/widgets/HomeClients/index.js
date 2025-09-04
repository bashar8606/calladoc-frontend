"use client"
import React from 'react';
import styles from './HomeClients.module.scss';

const HomeClients = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  return (
    <section id={`widget-${slug}`} className={`${styles.container || ''} home-clients-widget`} {...props}>
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {description && <p>{description}</p>}
      {items && items.map((item) => (
        <div key={item.id}>{/* Render nested component here */}</div>
      ))}
    </section>
  );
};

export default HomeClients; 