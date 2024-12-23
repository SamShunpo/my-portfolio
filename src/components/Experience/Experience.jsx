import './Experience.css'

function Experience({ title, date, id, company, company_link, description }) {

    return (
        <article key={id} className="article-exp">
            <div className='header-exp'>
            <h5>{title}</h5>
            <p >{date}</p>
            </div>
            {company_link ?(
                <a href={company_link} target="_blank">{company}</a>
            ): (<span className='type-a'>{company}</span>)}
            <p>{description}</p>
        </article>

    )

}

export default Experience