import React, { FC } from 'react';
import Image from 'next/image';

interface Iproject {
  id: number;
  company: string;
  description: string;
  urlImage?: string;
  stack: string[];
}

export const Cards: FC<Iproject> = ({
  id,
  company,
  description,
  stack,
  urlImage,
}) => {
  return (
    <li className="self-center align-center justify-center w-4/5 md:7/12 lg:7/12 mt-8">
      <div className="card bordered shadow-lg">
        {urlImage ? (
          <Image
            alt="photo"
            src={urlImage}
            className="w-full"
            width={150}
            height={200}
          />
        ) : (
          <Image
            alt="photo"
            src="/assets/projects/nophoto.jpeg"
            className="w-full"
            width={200}
            height={200}
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{company}</h2>
          <p>{description}</p>
          <div className="card-actions">
            {stack.map((tech, i) => {
              return (
                <div key={i} className="badge badge-primary">
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );
};
