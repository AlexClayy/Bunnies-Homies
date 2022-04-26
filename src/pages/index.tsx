import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
      <title>Bunnies N Homies - MINT</title>
        <meta
          name="description"
          content="Bunnies N Homies"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
