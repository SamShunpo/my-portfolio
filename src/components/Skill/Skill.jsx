import './Skill.css'

function Skill({ cover, name, id }) {

    return (
        <div key={id} className='skill'>
            <span>{name}</span>
          <img src={cover} alt="" />
        </div>

    )

}

export default Skill