"use client"
import React from 'react';
import styles from './CeoMessage.module.scss';
import Image from '@/components/Image/image';

const CeoMessage = ({ data, slug, ...props }) => {
  return (
    <div className={`ceo-message-widget ${styles.container || ''} ${props.className || ''}`}>
      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Left side - CEO Image */}
          <div className={styles.imageSection}>
            {data?.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={data.image}
                  alt={data?.name || "CEO"}
                  fill
                  className={styles.image}
                  priority
                />
              </div>
            )}
            {data?.name && (
              <div className={styles.ceoInfo}>
                <h3 className={styles.ceoName}>{data.name}</h3>
                {data?.designation && (
                  <p className={styles.ceoDesignation}>{data.designation}</p>
                )}
              </div>
            )}
          </div>

          {/* Right side - Message Content */}
          <div className={styles.messageSection}>
            {data?.title && (
              <h2 className={styles.title}>{data.title}</h2>
            )}
            {data?.subtitle && (
              <h3 className={styles.subtitle}>{data.subtitle}</h3>
            )}
            {data?.message && (
              <div className={styles.message}>
                {typeof data.message === 'string' ? (
                  <p>{data.message}</p>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: data.message }} />
                )}
              </div>
            )}
            {data?.signature && (
              <div className={styles.signature}>
                <Image
                  src={data.signature}
                  alt="CEO Signature"
                  width={200}
                  height={80}
                  className={styles.signatureImage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage; 