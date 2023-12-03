// Home.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  const [data, setdata] = useState([]);
  const [articleCount, setArticleCount] = useState(8);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = (searchInput, count, reset = false) => {
    // Modify the API endpoint based on the selected category
    const apiUrl = `${searchInput}API_END POINT`;

    axios
      .get(apiUrl)
      .then((response) => {
        const articles = response.data.articles;

        if (Array.isArray(articles)) {
          const startIndex = reset ? 0 : count - 8;
          const endIndex = count;
          const newArticles = reset
            ? articles.slice(0, endIndex)
            : articles.slice(startIndex, endIndex);
          setdata((prevData) =>
            reset ? newArticles : [...prevData, ...newArticles]
          );
        } else {
          console.error("Invalid response format - articles not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoadingMore(false);
      });
  };

  const handleSearch = (searchInput) => {
    setArticleCount(8);
    fetchData(searchInput, 8, true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };

  const handleLoadMore = () => {
    setArticleCount((prevCount) => prevCount + 8);
    fetchData(selectedCategory || "Pakistan", articleCount, false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchData(category, articleCount, true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;

      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowHeight + window.scrollY;

      if (windowBottom >= documentHeight - 100 && !loadingMore) {
        setLoadingMore(true);
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleLoadMore, loadingMore, selectedCategory]);

  useEffect(() => {
    fetchData(selectedCategory || "Web Development", articleCount, true);
  }, [selectedCategory, articleCount]);

  return (
    <div>
      <div className="hero-bg h-[70vh] ">
        <Header onCategoryClick={handleCategoryClick} />
        <Hero data={handleSearch} onKeyPress={handleKeyPress} />
      </div>
      {data.length > 0 && <Card data={handleSearch} api_data={data} />}
    </div>
  );
};

export default Home;
