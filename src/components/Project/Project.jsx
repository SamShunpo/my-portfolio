import './Project.css'

function Project({ cover, title, description, tag }) {

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
                </div>
            </article>
    )

}

export default Project