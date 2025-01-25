import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

import React from "react";

function Home() {
  return (
    <>
      <BookOverview book={{ ...sampleBooks[0] }} />
      <BookList />
    </>
  );
}

export default Home;
