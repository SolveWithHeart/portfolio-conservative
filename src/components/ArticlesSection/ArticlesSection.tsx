import type { CardProps } from '../Card/Card';
import { Card } from '../Card/Card';
import { Carousel } from '../Carousel/Carousel';

const articles: CardProps[] = [
  {
    title: 'Article title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    imageSrc: '/assets/images/card-bg.jpeg',
    link: 'https://www.google.com/',
  },
  {
    title: 'Article title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    imageSrc: '/assets/images/card-bg.jpeg',
    link: 'https://www.google.com/',
  },
  {
    title: 'Article title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    imageSrc: '/assets/images/card-bg.jpeg',
    link: 'https://www.google.com/',
  },
  {
    title: 'Article title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    imageSrc: '/assets/images/card-bg.jpeg',
    link: 'https://www.google.com/',
  },
  {
    title: 'Article title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    imageSrc: '/assets/images/card-bg.jpeg',
    link: 'https://www.google.com/',
  },
];

const ArticlesSection = () => {
  return (
    <section className="flex h-full w-screen flex-col items-center justify-between">
      <h3 className="title w-full pt-10 text-center">Articles</h3>
      <div>
        <Carousel>
          {articles.map((a) => (
            <Card key={`article-${a.title}-${Math.random()}`} {...a} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export { ArticlesSection };
