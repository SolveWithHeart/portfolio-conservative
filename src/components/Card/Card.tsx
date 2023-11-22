import Image from 'next/image';
import type { FC } from 'react';

export type CardProps = {
  title: string;
  description?: string;
  imageSrc: string;
  link: string;
};

const Card: FC<CardProps> = ({ title, description, imageSrc, link }) => {
  const handleReadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.open(link, '_blank');
  };

  return (
    <>
      <Image
        className="rounded-t-lg"
        src={imageSrc}
        alt={title}
        width={380}
        height={230}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          type="button"
          className=" inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={handleReadMore}
        >
          Read more
        </button>
      </div>
    </>
  );
};

export { Card };
