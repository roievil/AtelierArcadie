import React from 'react';
// import Contact from '@/components/ContactComponent'
// import Hero from '@/components/Hero'
import lacDuGrandMaclu from '../public/images/arcadie/lacDuGrandMaclu.jpg';
import Link from 'next/link';
import Image from 'next/image';

const arcadie = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-fixed bg-center bg-cover">
      <div className="flex justify-center w-full">
        <Image
          className="object-cover"
          src={lacDuGrandMaclu}
          alt="lacDuGranMaclu"
          width={1920}
          height={1080}
        />
      </div>
      <div className="max-w-[1000px] px-4 py-8">
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium">
          L’Arcadie est une région sauvage et montagneuse de la Grèce et c’est
          aussi un idéal pour les poètes depuis l’antiquité.
        </p>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium">
          Au cœur du Péloponnèse c’est un des berceaux de la Grèce Antique, de
          vertes vallées où les bergers mènent une vie simple faite de lait et
          de miel.
        </p>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium">
          C’est pourquoi elle est devenue un lieu mythique pour les premières
          civilisations citadines, un point de mire, un paradis perdu auquel
          rêver au milieu de la frénésie urbaine.
        </p>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium">
          Chacun a son Arcadie qui lui parle de cet idéal de vie plus
          harmonieuse, plus proche de la nature.
        </p>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium">
          Il revient à l’artisan d’apprivoiser cette nature et de lui rendre
          hommage dans ses créations. Comme le poète manie les mots, l’artisan
          invoque la matière et la façonne pour jeter un pont entre nous et
          cette beauté lointaine qu’est l’Arcadie.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-white text-black md:text-xl rounded-full px-6 py-2 mt-8 inline-block">
            <p className="font-bold text-xl">Me contacter</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default arcadie;
