"use client";

import Image from "next/image";
import styles from "./ImageBanner.module.css";

interface ImageBannerProps {
  src: string;
  alt: string;
  quote: string;
  attribution?: string;
  id?: string;
}

export function ImageBanner({ src, alt, quote, attribution, id }: ImageBannerProps) {
  return (
    <div className={styles.banner} id={id}>
      <div className={styles.imageWrap}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          quality={85}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <blockquote className={styles.quote}>
          <span className={styles.quoteMark}>&ldquo;</span>
          {quote}
          <span className={styles.quoteMark}>&rdquo;</span>
        </blockquote>
        {attribution && (
          <p className={styles.attribution}>— {attribution}</p>
        )}
      </div>
    </div>
  );
}
