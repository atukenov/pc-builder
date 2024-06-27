import styles from "./Setups.module.css";

interface PCSetupProps {
  id: number;
  name: string;
  configuration: string;
  price: number;
  imageUrl: string;
}

interface SetupsProps {
  items: PCSetupProps[];
}

const Setups: React.FC<SetupsProps> = ({ items }) => {
  return (
    <section id="setups" className={styles.setups}>
      <h2>Available Setups</h2>
      <div className={styles.grid}>
        {items.map((setup) => (
          <div key={setup.id} className={styles.card}>
            <img src={setup.imageUrl} alt={setup.name} />
            <h3>{setup.name}</h3>
            <p>{setup.configuration}</p>
            <p>{setup.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Setups;
