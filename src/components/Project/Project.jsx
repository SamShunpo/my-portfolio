import Skill from '../Skill/Skill';
import './Project.css';
import { Link } from 'react-router-dom';

function Project({ cover, title, description, tag, demoLink, githubLink, id, portfolio_skills }) {
   
        return (
            <article>
                <Link key={id} to={`/project/${id}`} className='article-left'>
                    <span className='tag'>{tag}</span>
                    <img src={cover} alt="" className='article-image' />
                </Link>
                <div className='article-right'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='project-skills'>
                        {portfolio_skills.map(({ cover, name, id }) =>
                            <Skill key={id} cover={cover} name={name} />)}
                    </div>
                    <div className='project-link-container'>
                        {demoLink && (
                            <div className='project-link'>
                                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                    LIVE DEMO
                                </a>
                                <img src="images/arrow-up.svg" alt="image d'une flêche pointant vers le haut" className='link-image' />
                            </div>
                        )}
                        <div>
                            {githubLink && (
                                <div className='project-link'>
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                        SEE ON GITHUB
                                    </a>
                                    <img src="images/bxl-github.svg" alt="logo de github" className='link-image' />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </article>
        )
    }

export default Project