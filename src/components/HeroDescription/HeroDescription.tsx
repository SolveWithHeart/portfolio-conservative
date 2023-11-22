import Image from 'next/image';
import type { FC } from 'react';

import { ArrowRightIcon } from '../icons/ArrowRight/ArrowRight';
import styles from './HeroDescription.module.scss';

type Props = {
  highlights: string[];
};

const HeroDescription: FC<Props> = ({ highlights }) => {
  return (
    <section
      className={`flex h-full w-full items-center justify-between ${styles.section}`}
    >
      <div className="relative h-full basis-2/4">
        <Image
          src="/assets/images/hero_description.jpg"
          alt="Know Your Rights"
          className={styles.image}
          fill
        />
      </div>
      <div
        className={`z-10 ml-10 flex h-full basis-2/4 flex-col items-center justify-center text-left ${styles.titles}`}
      >
        <h3 className="title w-full">All You Need. All Right Here</h3>
        <p className={`w-full ${styles.description}`}>
          {/* eslint-disable react/no-unescaped-entities */}
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using "Content here, content
          here", making it look like readable English. Many desktop publishing
          packages and web page editors now use.
        </p>
        <h5 className={`mt-10 w-full ${styles.subtitle}`}>Highlights</h5>
        <ul className={`w-full ${styles.highlights}`}>
          {highlights.map((h) => (
            <li className="flex items-center" key={`${h}-${Math.random()}`}>
              <ArrowRightIcon /> <p className="my-0 ml-2">{h}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { HeroDescription };
