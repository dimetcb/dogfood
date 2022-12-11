import { useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Logo from "../Logo/logo";
import SeachInfo from "../SeachInfo";
import Search from "../Search/search";
import Header from "../Header/header";
import Sort from "../Sort/sort";
import "./index.css";
import data from "../../assets/images/data.json";
import { useEffect } from "react";

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRequest = () => {
    const filterCards = data.filter((item) =>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setCards((prevState) => filterCards);
  };

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };
  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };
  return (
    <>
      <Header>
        <>
          {" "}
          <Logo className="logo logo_place_header" href="/" />
          <Search onSubmit={handleFormSubmit} onInput={handleInputChange} />
        </>
      </Header>
      <main className="content container">
        <SeachInfo searchCount={cards.length} searchText={searchQuery} />
        <Sort />
        <div className="content__cards">
          <CardList goods={cards} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
