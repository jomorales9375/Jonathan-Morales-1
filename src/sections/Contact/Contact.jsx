import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xvgpnqyd" method="post">
        <div className="formGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            email="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="name"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required>          
            </textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"  />
      </form>
    </section>
  );
}

export default Contact;
