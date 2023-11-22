import Image from 'next/image';
import type { FC } from 'react';

import styles from './HeroBanner.module.css';

const HeroBanner: FC = () => {
  return (
    <section
      className={`flex items-center justify-between ${styles.bannerWrapper}`}
    >
      <div
        className={`z-10 flex h-full flex-col items-center justify-center text-left ${styles.titles}`}
      >
        <h1 className={styles.title}>Everything You Need. All Right Here</h1>
        <h6 className={styles.subtitle}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </h6>
      </div>
      <div className="relative h-full sm:w-1/3 lg:w-3/5">
        <Image
          src="/assets/images/hero_profile.jpeg"
          alt="Sample Profile from i.pinimg.com"
          className={styles.banner}
          fill
        />
      </div>
    </section>
  );
};

export default HeroBanner;
