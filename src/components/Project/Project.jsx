import Skill from '../Skill/Skill'
import './Project.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSkills } from '../../redux/slices/skillSlice';

function Project({ cover, title, description, tag, demoLink, githubLink, id, portfolio_skills }) {
    const { items: skills, isLoading: isLoadingSkills } = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        if (skills.length === 0) {
            dispatch(fetchSkills());
        }
    }, [dispatch, skills]);

    const projectSkills = skills.filter(skill => 
        portfolio_skills.some(skillObj => skillObj.id === skill.id));

    if (isLoadingSkills) {
        return (
          <div className="loader">
            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><rect width={6} height={14} x={1} y={4} fill="#D3E97A"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={9} y={4} fill="#D3E97A" opacity={0.4}><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={17} y={4} fill="#D3E97A" opacity={0.3}><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate></rect></svg>
          </div>
        )
      }
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
                        {projectSkills.map(({ cover, name, id }) =>
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