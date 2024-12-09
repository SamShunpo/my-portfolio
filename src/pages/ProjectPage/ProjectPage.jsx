import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './ProjectPage.css';
import Layout from '../../components/Layout/Layout';

function ProjectPage() {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects.items);
  const project = projects.find((proj) => String(proj.id) === id);

  if (!project) {
    return (
      <Layout>
        <main className='project-page-main'>
          <h1>Projet non trouvé</h1>
          <Link to="/" className=''>Retour à l'accueil</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main>
        <section className="project-details">
          <h1>{project.title}</h1>
          <img src={project.cover} alt={project.title} className="project-image" />
          <p>{project.description}</p>
          <span>{project.tag}</span>
          <div className="links">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                LIVE DEMO
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                SEE ON GITHUB
              </a>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;

