import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Boss Bunny"/>
            <meta property="og:title" content="Mint Here"/>
            <meta property="og:description" content="A collection of the chillest BUNNIES on the block(chain)in search of immaculate vibes.  They’re bringing the party to Solana, and you’re invited.
                                                     Public
                                                      Sale

                                                      Supply
                                                      888

                                                      Max
                                                      2

                                                      Price
                                                      1 Sol"/>
            <meta property="og:image" content="https://pbs.twimg.com/profile_images/1513637794953977861/ZPQyAZZC_400x400.jpg"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@discord"/>
            <meta name="twitter:creator" content="@yourtwitter"/>
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
