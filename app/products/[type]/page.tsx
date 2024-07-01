import React from "react";
import styles from "./page.module.css";

interface Props {
  params: {
    type: string;
  };
}

const page: React.FC<Props> = ({ params }) => {
  const { type } = params;
  return (
    <div className={styles.types}>
      <h1>Choose a {type.toLocaleUpperCase()}</h1>
    </div>
  );
};

export default page;
