import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './ProjectPage.css';
import Layout from '../../components/Layout/Layout';
import Skill from '../../components/Skill/Skill';

function ProjectPage() {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects.items);
  const project = projects.find((proj) => String(proj.id) === id);

  const [selectedImage, setSelectedImage] = useState(project?.images?.[0]?.image_link || '');

  const handleCLick = (src) => {
      setSelectedImage(src);
  }

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
          <div className='project-page-title'>
            <h1>{project.title}</h1>
            <span>{project.tag}</span>
          </div>
          <div className='project-middle'>
          <div className='project-images'>
            <img 
              src={selectedImage || '/path/to/default-image.jpg'} 
              alt={project.title} 
              className="project-image" 
            />
            <div className='image-list'>
              {project.images?.map(({ image_link, id }) => (
                <img 
                  key={id} 
                  src={image_link} 
                  alt='' 
                  className={image_link === selectedImage ? 'miniature-selected' : 'miniature'} 
                  onClick={() => handleCLick(image_link)} 
                />
              ))}
            </div>
          </div>
          <div className='project-description'>
            <p>{project.description}</p>
            <div className='project-link-container'>
              {project.live_demo_link && (
                <div className='project-link'>
                  <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer">
                    LIVE DEMO
                  </a>
                  <img src="/images/arrow-up.svg" alt="image d'une flêche pointant vers le haut" className='link-image' />
                </div>
              )}
              <div>
                {project.github_link && (
                  <div className='project-link'>
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                      SEE ON GITHUB
                    </a>
                    <img src="/images/bxl-github.svg" alt="logo de github" className='link-image' />
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          <div className='project-skills'>
            {project.skills.map(({ cover, name, id }) =>
              <Skill key={id} cover={cover} name={name} />)}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;

