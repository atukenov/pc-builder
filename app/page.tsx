import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Setups from "./components/Setups/Setups";
import Contact from "./components/Contact/Contact";

const setups = [
  {
    id: 1,
    name: "Gaming Beast",
    configuration: "A high-end gaming setup for the ultimate experience.",
    price: 1500,
    imageUrl: "/images/pc1.jpg",
  },
  {
    id: 2,
    name: "Gaming Beast",
    configuration: "A high-end gaming setup for the ultimate experience.",
    price: 1500,
    imageUrl: "/images/pc2.jpg",
  },
  {
    id: 3,
    name: "Gaming Beast",
    configuration: "A high-end gaming setup for the ultimate experience.",
    price: 1500,
    imageUrl: "/images/pc3.jpg",
  },
  {
    id: 4,
    name: "Gaming Beast",
    configuration: "A high-end gaming setup for the ultimate experience.",
    price: 1500,
    imageUrl: "/images/pc3.jpg",
  },
  // Add more setups here
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Setups items={setups} />
      <Contact />
    </div>
  );
}
