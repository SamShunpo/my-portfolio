import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../../redux/slices/projectSlice';
import './ProjectPage.css';
import Layout from '../../components/Layout/Layout';
import Skill from '../../components/Skill/Skill';

function ProjectPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: projects, isLoading: isLoadingProjects } = useSelector((state) => state.projects);
  
  const project = projects.find((proj) => String(proj.id) === id);

  const [selectedImage, setSelectedImage] = useState('');

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  useEffect(() => {
    if (!projects || projects.length === 0) {
      dispatch(fetchProjects());
    }
  }, [dispatch]);  

  useEffect(() => {
    if (project?.images?.[0]?.image_link) {
      setSelectedImage(project.images[0].image_link);
    }
  }, [project]); 

  if (isLoadingProjects) {
    return (
      <div className="loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24">
          <rect width={6} height={14} x={1} y={4} fill="#D3E97A">
            <animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate>
            <animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate>
            <animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate>
          </rect>
          <rect width={6} height={14} x={9} y={4} fill="#D3E97A" opacity={0.4}>
            <animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate>
            <animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate>
            <animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate>
          </rect>
          <rect width={6} height={14} x={17} y={4} fill="#D3E97A" opacity={0.3}>
            <animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate>
            <animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate>
            <animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate>
          </rect>
        </svg>
      </div>
    );
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
                    onClick={() => handleClick(image_link)} 
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
          <div className='project-skills'>
            {project.skills.map(({ cover, name, id }) => (
              <Skill key={id} cover={cover} name={name} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProjectPage;
