import InfiniteSection from "../Sections/InfiniteSection";
import Navbar from "../Sections/Navbar";
import React from "react";
const RecentPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <InfiniteSection
        url={"https://animxer-api-phi.vercel.app/meta/anilist/recent-episodes"}
        itemlimit={21}
        sectiontitle={"Recent Episodes"}
        id="recent-section"
        querytype={"?"}
      ></InfiniteSection>
    </>
  );
};
export default RecentPage;
