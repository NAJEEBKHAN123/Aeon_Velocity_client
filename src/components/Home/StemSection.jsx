import React from "react";
import topImg from '../../assets/StemRaching/topImg.jpg'
import leftImg from '../../assets/StemRaching/leftImg.jpg'
import { useLanguage } from '../../contexts/LanguageContext';

const StemRacing = () => {
  const { currentLanguage } = useLanguage();

  // Unsplash image URLs for STEM Racing theme
  const unsplashImages = {
    topImg: topImg,
    leftImg: leftImg,
    bottomImg: "https://media.istockphoto.com/id/1133992451/photo/racing-team-working-at-pit-stop.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZyqOSr6zEed_IXPsKdKtGfSjQZiJZxczHN9-in4umgM="
  };

  const content = {
    en: {
      title: "WHAT IS STEM RACING?",
      paragraph1: "STEM Racing (formerly F1 in Schools) is the only global multidisciplinary challenge in which teams of students aged 9 to 19 design, analyse, manufacture and test a miniature Formula 1 car, and race them down a 20 metre track powered by CO₂ canisters.",
      paragraph2: "On top of creating these mini rocket ships, teams create a brand surrounding their team, where sponsorships are attained to fund the project and all its elements, which is then documented in a series of portfolios and presentations.",
      paragraph3: "The aim of STEM Racing is to foster lifelong skills in passionate students to support their education and accelerate careers in Science, Technology, Engineering and Mathematics (STEM). By utilising real-world engineering software, project management techniques and business and marketing strategies, students gain the opportunity to develop a skillset that extends beyond the confines of the classroom.",
      alt1: "Students working on engineering project",
      alt2: "Team collaboration on racing project",
      alt3: "Racing car design and engineering"
    },
    fr: {
      title: "QU'EST-CE QUE STEM RACING ?",
      paragraph1: "STEM Racing (anciennement F1 in Schools) est le seul défi multidisciplinaire mondial dans lequel des équipes d'étudiants âgés de 9 à 19 ans conçoivent, analysent, fabriquent et testent une mini voiture de Formule 1, et les font courir sur une piste de 20 mètres propulsée par des cartouches de CO₂.",
      paragraph2: "En plus de créer ces mini-fusées, les équipes créent une marque autour de leur équipe, où des sponsors sont obtenus pour financer le projet et tous ses éléments, qui sont ensuite documentés dans une série de portfolios et présentations.",
      paragraph3: "L'objectif de STEM Racing est de développer des compétences durables chez les étudiants passionnés pour soutenir leur éducation et accélérer leurs carrières dans les sciences, la technologie, l'ingénierie et les mathématiques (STEM). En utilisant des logiciels d'ingénierie du monde réel, des techniques de gestion de projet et des stratégies commerciales et marketing, les étudiants ont l'opportunité de développer des compétences qui vont au-delà des limites de la salle de classe.",
      alt1: "Étudiants travaillant sur un projet d'ingénierie",
      alt2: "Collaboration d'équipe sur un projet de course",
      alt3: "Conception et ingénierie de voiture de course"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="bg-white text-[#0B0B0B] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold italic text-[#0B0B0B] mb-16">
          {currentContent.title}
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.paragraph1}
            </p>
          </div>
          <div>
            <img
              src={unsplashImages.topImg}
              alt={currentContent.alt1}
              className="shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-center">
          <div>
            <img
              src={unsplashImages.leftImg}
              alt={currentContent.alt2}
              className="shadow-md w-full h-64 object-cover"
            />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.paragraph2}
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.paragraph3}
            </p>
          </div>

          <div>
            <img
              src={unsplashImages.bottomImg}
              alt={currentContent.alt3}
              className="shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemRacing;