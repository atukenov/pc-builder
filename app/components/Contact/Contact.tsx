import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const whatsappLink =
    "https://wa.me/YOUR_PHONE_NUMBER?text=I%20am%20interested%20in%20building%20a%20custom%20PC";

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Have any questions or want to get started? Contact us via WhatsApp!</p>
      <a
        href={whatsappLink}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        Message us on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
