import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { searchProduct } from "./productSlice";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  }

  function handleOpen() {
    if (!isOpen) navigate("/");
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
          <button className="btn btn-outline-secondary" onClick={handleOpen}>
            <CiSearch size={28} />
          </button>
        </InputGroup>
      ) : (
        <button className="btn btn-outline-secondary mb-0">
          <CiSearch size={28} onClick={handleOpen} />
        </button>
      )}
    </>
  );
}
