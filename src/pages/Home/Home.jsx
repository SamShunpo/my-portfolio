import './Home.css'
import Layout from '../../components/Layout/Layout'
import Form from '../../components/Form/Form'
import Project from '../../components/Project/Project'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, [])

    if (loading) {
      return <div>Chargement...</div>;
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
          <section>
            <div>
              <h2>MES REALISATIONS</h2>
              <p>Voici quelques-uns des projets sélectionnés qui témoignent de ma passion pour le développement web.</p>
            </div>
            {projects.map(({ cover, title, description, tag, id }) =>
              <Link key={id} to={`/project/${id}`} className='link-article'>
                <Project cover={cover.url} title={title} description={description} tag={tag} />
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
