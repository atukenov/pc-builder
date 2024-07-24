"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getTypeData } from "@/lib/api/getTypeData";
import { IComponent } from "@/app/models/Component";
import Table from "@/components/Table/Table";

interface Props {
  params: {
    type: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const { type } = params;
  const [components, setComponents] = useState<IComponent[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const list = await getTypeData(type);
      setComponents(list.data);
    };

    fetchData();
  }, [type]);

  console.log(components);

  return (
    <div className={styles.types}>
      <h1>Choose a {type.toLocaleUpperCase()}</h1>
      {components.map((item: any, index: number) => {
        return <div key={index}>{item.component_id.price}</div>;
      })}
      {/* <div>{components.length ? <Table data={components} /> : null}</div> */}
    </div>
  );
};

export default Page;
