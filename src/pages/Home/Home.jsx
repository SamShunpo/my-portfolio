import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaderShown } from '../../redux/slices/loaderSlice';
import './Home.css';
import Layout from '../../components/Layout/Layout';
import Form from '../../components/Form/Form';
import Project from '../../components/Project/Project';
import { Link } from 'react-router-dom';

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLocalLoader, setShowLocalLoader] = useState(false);
  const timeoutRef = useRef(null);

  const hasShownLoader = useSelector((state) => state.loader.hasShownLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:kO4YzG0A/portfolio_project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    if (!hasShownLoader) {
      setShowLocalLoader(true);
      timeoutRef.current = setTimeout(() => {
        setShowLocalLoader(false);
        dispatch(setLoaderShown());
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasShownLoader, dispatch]);

  if (showLocalLoader) {
    return (
      <div className='loader'>
        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><rect width={6} height={14} x={1} y={4} fill="#D3E97A"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={9} y={4} fill="#D3E97A" opacity={0.4}><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={17} y={4} fill="#D3E97A" opacity={0.3}><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate></rect></svg>
      </div>
    )
  }

  return (
    <Layout>
      <main>
        <section className='hero'>
          <div className='hero-left'>
            <h1>SALUT, JE SUIS SAM GLEIZE.</h1>
            <p>Développeur Lowcode sur Lyon, toujours à l'affût des dernières nouveautés</p>
            <div className='contact'>
              <a href='#form' className='button'>
                ME CONTACTER
                <img src="images/dot.svg" alt="Icon Linkedin" className='dot' />
              </a>
              <a href="https://www.linkedin.com/in/samuel-gleize-bourras-a8458a100/" className='rs' target="_blank"><img src="images/Frame 3.svg" alt="Icon Linkedin" /></a>
              <a href="https://github.com/SamShunpo" className='rs' target="_blank"><img src="images/Frame 4.svg" alt="Icon Github" /></a>
            </div>
          </div>
          <div className='profile-pic'>
            <img src="images/profile-pic.png" alt="photo de profil de Sam gleize avec des lunettes sur un fond gris/bleu" />
          </div>
        </section>
        <section id='work'>
          <div>
            <h2>MES REALISATIONS</h2>
            <p>Voici quelques-uns des projets sélectionnés qui témoignent de ma passion pour le développement web.</p>
          </div>
          {projects.map(({ cover, title, description, tag, id, live_demo_link, github_link }) =>
            <Link key={id} to={`/project/${id}`} className='link-article'>
              <Project cover={cover} title={title} description={description} tag={tag} demoLink={live_demo_link} githubLink={github_link} />
            </Link>
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
              <Link to="/about" className='about-link'>Cliquez ici !</Link>
            </div>
          </div>
        </section>
        <Form />
      </main>
    </Layout>
  )
}

export default Home
