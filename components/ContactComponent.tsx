import React, { Fragment } from 'react';
import Image from 'next/image';
import portrait from '../public/images/contact/portrait.jpg';
import MapComponent from '@/components/MapComponent';

const Contact = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0 pt-24 py-8 px-4 md:px-8">
        <div className="md:w-1/2 mr-4 text-center md:text-left md:px-20">
          <p className="text-lg mb-4 md:text-xl font-medium leading-loose">
            Après des études d’Écologie à Paris et Montréal, suivies de dix ans
            en tant qu’informaticien au service de la recherche scientifique
            j’ai voulu laisser libre cours à ma passion pour la création et le
            travail du bois.
          </p>
          <p className="text-lg mb-4 md:text-xl font-medium leading-loose">
            Formé en 2014 en Ébénisterie à l’école Boulle, j’ai ensuite
            travaillé à l’Atelier Figurasfondo où j’ai pu consolider mon goût et
            ma pratique de la fabrication numérique. Je me suis approprié cette
            nouvelle manière de créer, enfin de compte naturelle pour moi qui
            vient du monde de l’informatique. La difficulté et l’apprentissage
            ne résident plus seulement dans la répétition du geste de l’artisan,
            dans sa connaissance intime jusqu’à l’excellence, mais aussi dans la
            recherche et la compréhension de la machine. Celle-ci a son propre
            langage, et son propre rapport à la matière. La répétition a alors
            aussi pour but de trouver le fichier juste, la bonne communication
            avec la machine.
          </p>
          <p className="text-lg mb-4 md:text-xl font-medium leading-loose">
            À l’école Boulle il était question du concept duel ‘l’esprit et la
            main’ pour désigner le couple à l’œuvre chez l’artisan, avec la
            fabrication numérique il s’agit peut être d’un ménage à trois, la
            main de l’artisan est parfois remplacée par celle de la machine à
            laquelle il faut alors savoir insuffler l’esprit de l’artisan, sa
            vision.
          </p>
          <p className="text-lg mb-4 md:text-xl font-medium leading-loose">
            En 2016, avec ma collection Styx, je suis lauréat du prix Jeune
            Talent organisé par le Carrousel des Métiers d’Art et de Création.
          </p>
        </div>
        <div className="md:w-1/2 flex items-start">
          <div className="flex flex-col w-full">
            <div className="max-w-full mb-8">
              <Image
                src={portrait}
                alt="Photo"
                width="640"
                height="640"
                priority
                className="max-w-full object-cover"
              />
            </div>
            <div className="max-w-md mx-auto bg-black border-2 border-white p-4 rounded-lg">
              <p className="font-bold mb-2">
                Olivier Glorieux – 06 62 49 24 08 -{' '}
                <a
                  href="mailto:olivier@atelierarcadie.fr"
                  className=" hover:text-blue-300 underline">
                  olivier@atelierarcadie.fr
                </a>
              </p>
              <p className="mb-2"> </p>
              <p className="mb-2">3 rue du Bois Haligan à Nantes</p>
              <p className="mb-2">Sur Rendez-Vous</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full">
        <MapComponent />
      </div>
    </>
  );
};

export default Contact;
