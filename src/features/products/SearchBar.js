import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { searchProduct } from "./productSlice";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  }

  function handleOpen() {
    setIsOpen(!isOpen);
    setSearch("");
    dispatch(searchProduct(""));
  }

  return (
    <>
      {isOpen ? (
        <InputGroup className="">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
          <button class="btn btn-outline-secondary" onClick={handleOpen}>
            <TiDelete size={28} />
          </button>
        </InputGroup>
      ) : (
        <button className="btn btn-outline-secondary mb-0">
          <CiSearch size={28} onClick={() => setIsOpen(!isOpen)} />
        </button>
      )}
    </>
  );
}
