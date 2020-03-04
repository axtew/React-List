import React, { useEffect, useState } from "react";

import ItemInfo from "../ItemInfo";
import UserList from "../UsersList";
import Search from "../Search";

import "./index.css";

const url =
  "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setList(data);
        setFilteredList(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search !== "") {
      const value = search.toLowerCase();

      const filter = list.filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`;

        return (
          fullName.toLowerCase().includes(value) ||
          String(item.id).includes(value)
        );
      });

      setFilteredList(filter);
    } else {
      setFilteredList(list);
    }
  }, [search]);

  return isLoading ? (
    <div className="loading">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  ) : (
    <div className="main">
      <Search value={search} onChange={e => setSearch(e.target.value)} />

      <UserList list={filteredList} setSelectedItem={setSelectedItem} />

      {selectedItem !== null && (
        <ItemInfo item={selectedItem} close={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default Main;
