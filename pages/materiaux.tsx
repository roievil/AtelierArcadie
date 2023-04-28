import React from 'react';
// import Contact from '@/components/ContactComponent'
// import Hero from '@/components/Hero'
import valchromat from '../public/images/materiaux/ValchromatCollectionStyxParArcadie.jpg';
import laiton from '../public/images/materiaux/BobineDeFilDeLaitonCollectionStyxParArcadie.jpg';
import altuglas from '../public/images/materiaux/60LetheCollectionStyxParArcadie.jpg';
import leds from '../public/images/materiaux/00ErebeCollectionStyxParArcadie.jpg';
import Link from 'next/link';
import Image from 'next/image';

const arcadie = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-fixed bg-center bg-cover pt-24">
      <div className="max-w-[1000px] px-4 py-8">
        <h1 className="text-3xl font-bold py-8">Fabrication et matériaux</h1>
        <h2 className="text-2xl font-bold py-8">Made in Nantes</h2>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium pb-4">
          Tous les items de la collection Styx sont dessinés et réalisés en
          circuit court, dans mon atelier de Nantes. La fabrication est
          artisanale dans ce qu’elle a de plus noble, chaque pièce passe entre
          mes mains et est estampillée, ce qui me permet de garantir la grande
          qualité de l’objet fini et me donne une large flexibilité pour
          l’adapter à votre souhait. Tous mes modèles sont donc disponibles 100%
          sur mesure et personnalisables.
        </p>
        <Link href={valchromat.src} target="_blank" rel="noopener noreferrer">
          <Image className="object-cover" src={valchromat} alt="valchromat" />
        </Link>
        <h2 className="text-2xl font-bold py-8">Valchromat</h2>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium pb-4">
          Le valchromat est un nouveau matériau constitué de fibres de bois
          teintées dans la masse, la couleur est présente dans toute l’épaisseur
          de la ‘feuille’. Le valchromat s’apparente donc au bois et en a la
          légèreté, la chaleur et la résistance, il a par contre l’avantage
          d’être moins sensible aux variations de température et d’hygrométrie
          ainsi que d’être légèrement hydrofuge. Je lui applique une finition
          qui avive sa couleur et son caractère organique et le protège des
          aléas du quotidien de la maison.
        </p>
        <Link href={laiton.src} target="_blank" rel="noopener noreferrer">
          <Image className="object-cover" src={laiton} alt="laiton" />
        </Link>
        <h2 className="text-2xl font-bold py-8">Laiton</h2>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium pb-4">
          Les ornementations de la collection Styx sont le fruit magique de
          l’étreinte d’un fil de laiton massif avec le valchromat noir. Le fil
          mesure 0,3 mm de diamètre et peut suivre n’importe quel chemin qui ne
          lui impose pas d’angles brusques et aigus.
        </p>
        <Link href={leds.src} target="_blank" rel="noopener noreferrer">
          <Image className="object-cover" src={leds} alt="leds" />
        </Link>
        <h2 className="text-2xl font-bold py-8">Leds</h2>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium pb-4">
          Sous forme de rubans ou d’ampoule hommage au modèle originel d’Edison,
          les sources lumineuses de mes luminaires sont des leds et bénéficient
          ainsi de leurs grandes qualités que sont la durabilité,
          l’instantanéité de la lumière et la consommation très réduite en
          énergie.
        </p>
        <Link href={altuglas.src} target="_blank" rel="noopener noreferrer">
          <Image className="object-cover" src={altuglas} alt="altuglas" />
        </Link>
        <h2 className="text-2xl font-bold py-8 ">Altuglas</h2>
        <p className="text-lg mb-4 indent-8 md:text-xl font-medium pb-4">
          l’altuglas ou verre acrylique est d’une clareté remarquablement proche
          du verre, sans en avoir le poids ou la friabilité. Il se marie à
          merveille à la luminosité des leds et peut être gravé au laser pour
          dessiner, d’un trait de lumière, le motif de votre choix
        </p>
      </div>
    </div>
  );
};

export default arcadie;
