import './Project.css'

function Project({ cover, title, description, tag, demoLink, githubLink }) {

    return (
        <article>
            <div className='article-left'>
                <span className='tag'>{tag}</span>
                <img src={cover} alt="" className='article-image' />
            </div>
            <div className='article-right'>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>INFO DU PROJET</h4>
                <div className='project-link-container'>
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                            LIVE DEMO
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            SEE ON GITHUB
                        </a>
                    )}
                </div>

            </div>
        </article>
    )

}

export default Project