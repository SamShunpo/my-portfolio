import './Form.css'

function Form() {
    return (
        <section id="form" className='form'>
            <div>
                <h2>Contact</h2>
                <a href="mailto:gleizebourrassamuel@gmail.com">gleizebourrassamuel@gmail.com</a>
            </div>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Nom : <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email : <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message : <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Envoyer</button>
                </p>
            </form>

        </section>
    )
}
export default Form