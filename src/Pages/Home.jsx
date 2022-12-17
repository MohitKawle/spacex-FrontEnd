import React from "react";
import Banner from "../Component/Banner";
import Search from "../Component/Search";
import ShowData from "../Component/ShowData";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Space X</h1>
      {/* <Banner /> */}
      <Search />
      <ShowData />
    </div>
  );
}

export default Home;
