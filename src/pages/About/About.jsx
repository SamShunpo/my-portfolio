import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkills } from '../../redux/slices/skillSlice';
import { fetchExperiences } from '../../redux/slices/experienceSlice';
import './About.css'
import Layout from '../../components/Layout/Layout'
import Form from '../../components/Form/Form'
import Skill from '../../components/Skill/Skill';
import Experience from '../../components/Experience/Experience'
import Button from '../../components/Button/Button';

function About() {
  const { items: skills, isLoading: isLoadingSkills } = useSelector((state) => state.skills);
  const { items: experiences, isLoading: isLoadingExperiences } = useSelector((state) => state.experiences);
  const dispatch = useDispatch();

  useEffect(() => {
    if (skills.length === 0) {
      dispatch(fetchSkills());
    }
    if (experiences.length === 0) {
      dispatch(fetchExperiences());
    }
  }, [dispatch, skills.length, experiences.length]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  if (isLoadingSkills || isLoadingExperiences) {
    return (
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><rect width={6} height={14} x={1} y={4} fill="#D3E97A"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={9} y={4} fill="#D3E97A" opacity={0.4}><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={17} y={4} fill="#D3E97A" opacity={0.3}><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate></rect></svg>
      </div>
    )
  }

  return (
    <Layout>
      <main>
        <section id='top'>
          <div className='about-left'>
            <h1>A propos de moi</h1>
          </div>
          <div className='about-right'>
            <h3>De Gérant de Bar à Développeur Lowcode</h3>
            <p>
              Après 15 ans à tirer des pintes et à gérer un bar à bière, j'ai décidé de changer de fût et de me lancer dans le code. Séduit dans un premier temps par le "no-code", j'ai vite réalisé que j'avais soif de plus. Maintenant formé en HTML, CSS et JavaScript, je mélange astucieusement no-code et code pour livrer des projets sur-mesure, avec la rapidité d'un service en happy hour. Envie d'en savoir plus ?
            </p>
            <Button image="/images/dot.svg" hoverImage="/images/circle-download.svg" title="MON CV" href="/images/cv_sam.pdf" isDownload={true}/>
          </div>
          <img src="/images/sam-about.webp" alt="image" className='image-about' />
        </section>
        <section>
          <div className='about-left'>
            <h2>Hard Skills</h2>
          </div>
          <div className='about-right'>
            <p><span>"Un mix parfait entre tradition et innovation"</span><br />
            De la maîtrise des outils no-code comme Bubble ou Make, à la rigueur des langages classiques comme HTML, CSS et JavaScript, mes compétences s'étendent sur un large éventail technologique. Mon approche ? Trouver l'équilibre parfait entre rapidité d'exécution et personnalisation sur-mesure. Un peu comme une recette de cocktail bien dosée, mais avec du code. 😉 Vous avez un projet en tête ? Je suis prêt à le shaker</p>
            <div className='skill-container'>
              {skills.map(({ cover, name, id }) =>
                <Skill key={id} cover={cover} name={name} />
              )}
            </div>
          </div>
        </section>
        <section>
          <div className='about-left'>
            <h2>Expérience</h2>
          </div>
          <div className='about-right'>
            {experiences.map(({ id, title, date, company, description, company_link }) =>
              <Experience key={id} title={title} date={date} company={company} description={description} company_link={company_link}/>
            )}
          </div>
        </section>
        <Form />
      </main>
    </Layout>
  )

}

export default About
