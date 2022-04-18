import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TableComponent } from "./Table";

const handleClick = (type,row) => console.log(type,row);
const headers = ["Name", "Email", "Phone Number", "Country"];
const rows = [{ firstName: "Juan", email: "arg@gmail.com", phone: "+543242343", country: "AR" }];

describe("Render User", () => {
  beforeEach(() =>
    render(
      <TableComponent rows={rows} header={headers} handleClick={handleClick} />
    )
  );

  it("Render Name", () => {
    expect(screen.getByText(rows[0].firstName)).toBeInTheDocument();
  });
  it("Render Email", () => {
    expect(screen.getByText(rows[0].email)).toBeInTheDocument();
  });
  it("Render Phone", () => {
    expect(screen.getByText(rows[0].phone)).toBeInTheDocument();
  });
  it("Render Country", () => {
    expect(screen.getByText(rows[0].country)).toBeInTheDocument();
  });
});
