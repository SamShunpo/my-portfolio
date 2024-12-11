import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../../redux/slices/projectSlice';
import './Home.css';
import Layout from '../../components/Layout/Layout';
import Form from '../../components/Form/Form';
import Project from '../../components/Project/Project';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Home() {
  const { items: projects, isLoading : isLoadingProjects, error } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0){
    dispatch(fetchProjects());
    }
  }, [dispatch, projects]);

  if (isLoadingProjects) {
    return (
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><rect width={6} height={14} x={1} y={4} fill="#D3E97A"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={9} y={4} fill="#D3E97A" opacity={0.4}><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={17} y={4} fill="#D3E97A" opacity={0.3}><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate></rect></svg>
      </div>
    )
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <Layout>
      <main>
        <section className='hero'>
          <div className='hero-left'>
            <h1>SALUT, JE SUIS SAM GLEIZE.</h1>
            <p>Développeur Lowcode sur Lyon, toujours à l'affût des dernières nouveautés</p>
            <Button image="images/dot.svg" hoverImage="/images/circle-contact.svg" title="ME CONTACTER" href='#form'/>
          </div>
          <div className='profile-pic'>
            <img src="images/sam-home.webp" alt="photo de profil de Sam gleize avec des lunettes sur un fond gris/bleu" />
          </div>
        </section>
        <section id='work'>
          <div>
            <h2>MES REALISATIONS</h2>
            <p>Voici quelques-uns des projets sélectionnés qui témoignent de ma passion pour le développement web.</p>
          </div>
          {projects.map(({ cover, title, description, tag, id, live_demo_link, github_link, skills}) =>
            <Project key={id} id={id} cover={cover} title={title} description={description} tag={tag} demoLink={live_demo_link} githubLink={github_link} portfolio_skills={skills}/>
          )}
        </section>
        <section>
          <h2>A PROPOS DE MOI</h2>
          <div className='about'>
            <h3>De Gérant de Bar à Développeur Lowcode</h3>
            <p>
              Après 15 ans à tirer des pintes et à gérer un bar à bière, j'ai décidé de changer de fût et de me lancer dans le code. Séduit dans un premier temps par le "no-code", j'ai vite réalisé que j'avais soif de plus. Maintenant formé en HTML, CSS et JavaScript, je mélange astucieusement no-code et code pour livrer des projets sur-mesure, avec la rapidité d'un service en happy hour. Envie d'en savoir plus ?
            </p>
            <div className='about-link-container'>
            <Link to="/about#top" className='about-link'>Cliquez ici !</Link>
            </div>
          </div>
        </section>
        <Form />
      </main>
    </Layout>
  )
}

export default Home
