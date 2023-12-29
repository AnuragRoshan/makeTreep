import React from "react";
import { useParams } from "react-router-dom";
import ArticleBanner from "../Components/Article/ArticleBanner";
import TrendingStroies from "../Components/Stories/TrendingStroies";
import ArticleContent from "../Components/Article/ArticleContent";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <section style={{ height: "80vh" }}>
        <ArticleBanner name={id} />
      </section>

      <section style={{ height: "max-content" }}>
        <ArticleContent name={id} />
      </section>
      <section style={{ height: "max-content" }}>
        <TrendingStroies trend={"Author's More"} limit={3} />
      </section>
    </div>
  );
};

export default Article;
