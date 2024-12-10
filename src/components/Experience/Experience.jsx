function Experience({ title, date, id, company, company_link, description }) {

    return (
        <article key={id}>
            <div>
            <h4>{title}</h4>
            <span>{date}</span>
            </div>
            <a href={company_link}>{company}</a>
            <p>{description}</p>
        </article>

    )

}

export default Experience