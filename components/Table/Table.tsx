"use client";

import React, { Component } from "react";
import styles from "./Table.module.css";

type TableProps = {
  data: Array<{ [key: string]: any }>;
};

type TableState = {
  data: Array<{ [key: string]: any }>;
  sortColumn: string;
  sortOrder: "asc" | "desc";
  editingRowIndex: number | null;
};

class Table extends Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      data: props.data,
      sortColumn: "",
      sortOrder: "asc",
      editingRowIndex: null,
    };
  }

  handleSort = (column: string) => {
    const { sortColumn, sortOrder, data } = this.state;
    let newSortOrder: "asc" | "desc" = "asc";
    if (sortColumn === column && sortOrder === "asc") {
      newSortOrder = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return newSortOrder === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortOrder === "asc" ? 1 : -1;
      return 0;
    });

    this.setState({
      data: sortedData,
      sortColumn: column,
      sortOrder: newSortOrder,
    });
  };

  handleDelete = (index: number) => {
    const { data } = this.state;
    const newData = [...data];
    newData.splice(index, 1);
    this.setState({ data: newData });
  };

  handleEdit = (index: number) => {
    this.setState({ editingRowIndex: index });
  };

  handleSave = (index: number, updatedRow: { [key: string]: any }) => {
    const { data } = this.state;
    const newData = [...data];
    newData[index] = updatedRow;
    this.setState({ data: newData, editingRowIndex: null });
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    column: string
  ) => {
    const { data } = this.state;
    const newData = [...data];
    newData[index][column] = e.target.value;
    this.setState({ data: newData });
  };

  render() {
    const { data, editingRowIndex } = this.state;
    console.log(data);
    const columns = data.length ? Object.keys(data[0]) : [];

    return (
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            {columns.map((column) => (
              <th
                key={column}
                className={styles.th}
                onClick={() => this.handleSort(column)}
              >
                {column}
              </th>
            ))}
            <th className={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tr}>
              {columns.map((column) => (
                <td key={column} className={styles.td} data-label={column}>
                  {editingRowIndex === rowIndex ? (
                    <input
                      type="text"
                      value={row[column]}
                      onChange={(e) => this.handleChange(e, rowIndex, column)}
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
              <td className={styles.td} data-label="Actions">
                {editingRowIndex === rowIndex ? (
                  <button
                    className={styles.button}
                    onClick={() => this.handleSave(rowIndex, row)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => this.handleEdit(rowIndex)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className={styles.button}
                  onClick={() => this.handleDelete(rowIndex)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
