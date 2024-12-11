import './Experience.css'

function Experience({ title, date, id, company, company_link, description }) {

    return (
        <article key={id} className="article-exp">
            <div className='header-exp'>
            <h5>{title}</h5>
            <p >{date}</p>
            </div>
            <a href={company_link}>{company}</a>
            <p>{description}</p>
        </article>

    )

}

export default Experience