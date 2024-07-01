import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h2>Build Your Dream PC</h2>
      <p>
        Choose from a variety of configurations and setups to fit your needs.
      </p>
      <a href="#setups" className={styles.cta}>
        See Setups
      </a>
    </section>
  );
};

export default Hero;
