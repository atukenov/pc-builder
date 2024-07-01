import React from "react";
import styles from "./BuildForm.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";

const PCParts = [
  {
    title: "CPU",
    link: "cpu",
  },
  {
    title: "CPU Cooler",
    link: "cpucooler",
  },
  {
    title: "Motherboard",
    link: "motherboard",
  },
  {
    title: "Memory",
    link: "memory",
  },
  {
    title: "Storage",
    link: "storage",
  },
  {
    title: "Video Card",
    link: "videoCard",
  },
  {
    title: "Case",
    link: "case",
  },
  {
    title: "Power Supply",
    link: "powersupply",
  },
  {
    title: "Operating System",
    link: "operatingsystem",
  },
  {
    title: "Monitor",
    link: "monitor",
  },
];

const BuildForm = () => {
  return (
    <div>
      {PCParts.map((pcPart) => {
        return (
          <div key={pcPart.link}>
            <div className={styles.title}>
              <h2>{pcPart.title}</h2>
              <hr />
            </div>
            <div className={styles.button}>
              <Link href={`/products/${pcPart.link}`}>
                <Button
                  label={`+ Choose ${pcPart.title}`}
                  type="button"
                  onClick={() => {}}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BuildForm;
