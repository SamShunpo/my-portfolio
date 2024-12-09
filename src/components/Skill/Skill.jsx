import './Skill.css'

function Skill({ cover, name, id }) {

    return (
        <div key={id} className='article-right'>
          <img src={cover} alt=""/>
        </div>

    )

}

export default Skill