import { ArticlesSection } from '@/components/ArticlesSection/ArticlesSection';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { HeroDescription } from '@/components/HeroDescription/HeroDescription';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const highlights = [
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
];

const Index = () => (
  <Main
    meta={
      <Meta
        title="Personal brand"
        description="This is a template for a personal brand webpage"
      />
    }
  >
    <HeroBanner />
    <HeroDescription highlights={highlights} />
    <ArticlesSection />
  </Main>
);

export default Index;
