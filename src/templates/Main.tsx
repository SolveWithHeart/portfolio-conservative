import type { ReactNode } from 'react';

import { Header } from '@/components/Header/Header';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <Header />
    <main className="content text-xl">{props.children}</main>

    <footer className="mx-auto max-w-screen-lg border-t border-gray-300 py-8 text-center text-sm">
      © Copyright 2023 {AppConfig.title}. Made with{' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
    </footer>
  </div>
);

export { Main };
