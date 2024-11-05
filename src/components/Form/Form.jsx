import './Form.css'

function Form() {
    return (
        <section id="form" className='form-container'>
            <div className="form-left">
                <h2>Contact</h2>
                <span className="span-form">Un petit bonjour : <a href="mailto:gleizebourrassamuel@gmail.com" className="a-form">gleizebourrassamuel@gmail.com</a></span>
                <span className="span-form"> Pour plus d'info : <a href="/images/cv_sam.pdf" download className="a-form">mon CV</a></span>
                <div className="rs-form-container">
                    <a href="https://www.linkedin.com/in/samuel-gleize-bourras-a8458a100/" className='rs' target="_blank"><img src="images/bxl-linkedin.svg.svg" alt="Icon Linkedin" /></a>
                    <a href="https://github.com/SamShunpo" className='rs'target="_blank"><img src="images/bxl-github.svg" alt="Icon Github" /></a>
                </div>
            </div>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label htmlFor='name'>Nom</label>
                    <input type="text" name="name" id='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id='email' />
                </div>
                <div>
                    <label htmlFor='subject'>Sujet</label>
                    <input type="text" name="subject" id='subject' />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea name="message" id='message'></textarea>
                </div>
                <div>
                    <button type="submit" className='button-submit'>ENVOYER</button>
                </div>
            </form>

        </section>
    )
}
export default Form