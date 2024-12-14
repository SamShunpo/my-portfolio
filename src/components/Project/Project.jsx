import Skill from '../Skill/Skill';
import './Project.css';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function Project({ cover, title, description, tag, demoLink, githubLink, id, portfolio_skills }) {
    const [isVisibleLeft, setIsVisibleLeft] = useState(false);
    const [isVisibleRight, setIsVisibleRight] = useState(false);

    const articleLeftRef = useRef(null);
    const articleRightRef = useRef(null);

    const checkVisibility = () => {
        if (articleLeftRef.current) {
            const rect = articleLeftRef.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom -300 <= window.innerHeight) {
                setIsVisibleLeft(true);
            }
        }
        if (articleRightRef.current) {
            const rect = articleRightRef.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom -300 <= window.innerHeight) {
                setIsVisibleRight(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    return (
        <article>
            <Link key={id} to={`/project/${id}`} className={`article-left ${isVisibleLeft ? 'visible' : ''}`}
                ref={articleLeftRef}>
                <span className='tag'>{tag}</span>
                <img src={cover} alt="" className='article-image' />
            </Link>
            <div className={`article-right ${isVisibleRight ? 'visible' : ''}`}
                ref={articleRightRef}>
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