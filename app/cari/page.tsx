"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function Cari() {
  const [query, setQuery] = useState("");

  const onSearchData = (e: any) => {
    e.preventDefault();

    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div>
      <form onSubmit={onSearchData}>
        <input placeholder='Cari User Github' />
        <button>Cari</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
