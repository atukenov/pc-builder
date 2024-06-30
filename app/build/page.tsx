"use client";

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "./page.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import BuildForm from "./BuildForm/BuildForm";

const partsInit: Part[] = [
  { id: 1, name: "Case A", type: "case", imageUrl: "/images/pc1.jpg" },
  {
    id: 2,
    name: "Motherboard A",
    type: "motherboard",
    compatibleWith: [1],
    imageUrl: "/images/pc1.jpg",
  },
  {
    id: 3,
    name: "Videocard A",
    type: "videocard",
    compatibleWith: [2],
    imageUrl: "/images/pc2.jpg",
  },
  { id: 4, name: "Case B", type: "case", imageUrl: "/images/pc1.jpg" },
  {
    id: 5,
    name: "Motherboard B",
    type: "motherboard",
    compatibleWith: [4],
    imageUrl: "/images/pc3.jpg",
  },
  {
    id: 6,
    name: "Videocard B",
    type: "videocard",
    compatibleWith: [5],
    imageUrl: "/images/pc1.jpg",
  },
];

type Part = {
  id: number;
  name: string;
  type: string;
  compatibleWith?: number[];
  imageUrl: string;
};

const BuildPage: React.FC = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  useEffect(() => {
    const fetchParts = async () => {
      const response: any = [];
      setParts(partsInit);
    };
    fetchParts();
  }, [parts]);

  const filterParts = (type: string, compatibility?: number) => {
    return parts.filter(
      (part) =>
        part.type === type &&
        (!compatibility || part.compatibleWith?.includes(compatibility))
    );
  };

  const initialValues = {
    case: "",
    motherboard: "",
    videocard: "",
  };

  const validationSchema = Yup.object({
    case: Yup.string().required("Case is required"),
    motherboard: Yup.string().required("Motherboard is required"),
    videocard: Yup.string().required("Videocard is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log(JSON.stringify(values, null, 2));
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className={styles.container}>
      <h1>Build Your PC</h1>
      <BuildForm />
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={styles.field}>
              <label htmlFor="case" className={styles.fieldLabel}>
                Select Case
              </label>
              <Field
                as="select"
                name="case"
                id="case"
                className={styles.fieldSelect}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const caseId = parseInt(e.target.value);
                  setFieldValue("case", caseId);
                  setSelectedCase(caseId);
                  setFieldValue("motherboard", "");
                  setFieldValue("videocard", "");
                }}
              >
                <option value="">Select Case</option>
                {filterParts("case").map((part) => (
                  <option key={part.id} value={part.id}>
                    {part.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="case"
                component="div"
                className={styles.error}
              />
            </div>

            {selectedCase && (
              <div className={styles.field}>
                <label htmlFor="motherboard" className={styles.fieldLabel}>
                  Select Motherboard
                </label>
                <Field
                  as="select"
                  name="motherboard"
                  id="motherboard"
                  className={styles.fieldSelect}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const motherboardId = parseInt(e.target.value);
                    setFieldValue("motherboard", motherboardId);
                    setFieldValue("videocard", "");
                  }}
                >
                  <option value="">Select Motherboard</option>
                  {filterParts("motherboard", selectedCase).map((part) => (
                    <option key={part.id} value={part.id}>
                      {part.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="motherboard"
                  component="div"
                  className={styles.error}
                />
              </div>
            )}

            {values.motherboard && (
              <div className={styles.field}>
                <label htmlFor="videocard" className={styles.fieldLabel}>
                  Select Videocard
                </label>
                <Field
                  as="select"
                  name="videocard"
                  id="videocard"
                  className={styles.fieldSelect}
                >
                  <option value="">Select Videocard</option>
                  {filterParts("videocard", parseInt(values.motherboard)).map(
                    (part) => (
                      <option key={part.id} value={part.id}>
                        {part.name}
                      </option>
                    )
                  )}
                </Field>
                <ErrorMessage
                  name="videocard"
                  component="div"
                  className={styles.error}
                />
              </div>
            )}

            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default BuildPage;
