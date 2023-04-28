import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/components/coffrets.json';
import { type Data } from '@/types/interfaces';

const coffrets = (): JSX.Element => {
  const { pageTitle, posts } = data as Data;

  const pictureWidth = 1620;

  return (
    <div className="max-w-1620 mx-auto pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight">{pageTitle}</h1>
        <div className="mt-8">
          {posts.map((post, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-lg font-bold mb-2">{post.postTitle}</h2>
              <div className="grid md:grid-cols-2 gap-x-8">
                {post.pictures.map((picture, subIndex) => (
                  <div key={subIndex} className="mb-6">
                    <div className="max-w-full">
                      <Link
                        href={picture.picturePath}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                          src={picture.picturePath}
                          alt={picture.alt}
                          width={pictureWidth}
                          height={picture.height}
                          className="rounded-lg pb-2"
                        />
                      </Link>
                    </div>
                    <div
                      className="picture-legend"
                      dangerouslySetInnerHTML={{
                        __html: picture.pictureLegend,
                      }}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default coffrets;
