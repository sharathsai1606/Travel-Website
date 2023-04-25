import "./ContactFormStyles.css";

function ContactForm () {
    return(
<div className="form-container">
    <h1>Send a message to Us!</h1>
    <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows></textarea>
        <button>Send Message</button>
    </form>
</div>
    )
}
export default ContactForm;