import React from "react";
import styles from "./page.module.css";
import { getTypeData } from "@/lib/api/getTypeData";
import { IComponent } from "@/app/models/Component";
import Table from "@/components/Table/Table";

interface Props {
  params: {
    type: string;
  };
}

const page: React.FC<Props> = async ({ params }) => {
  const { type } = params;
  const list = await getTypeData(type);
  const components = list.components;
  console.log(components.length);
  return (
    <div className={styles.types}>
      <h1>Choose a {type.toLocaleUpperCase()}</h1>
      {/* {components &&
        components.map((item: IComponent) => {
          return <div key={item.id}>{item.price}</div>;
        })} */}
      <div>{components.length ? <Table data={components} /> : null}</div>
    </div>
  );
};

export default page;
