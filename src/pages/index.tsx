import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
                  <meta property="og:type" content="website"/>
                  <meta property="og:url" content="https://bunnies-n-homies.netlify.app/"/>
                  <meta property="og:title" content="Mint Here"/>
                  <meta property="og:site_name" content="This is an automatic announcement message."/>
                  <meta name="description" content="A collection of the chillest BUNNIES on the block(chain)in search of immaculate vibes.  They’re bringing the party to Solana, and you’re invited.
                    Sale information:
                    ▶ Mint Price: 1 Sol
                    ▶ Supply: 888
                    ▶ Limit: up to 4  per wallet "/>

                  <meta property="og:site_name" content="This is an automatic announcement message."/>
                  <meta property="twitter:card" content="summary_large_image"/>
                  <meta property="twitter:url" content="https://bunnies-n-homies.netlify.app/"/>
                  <meta property="twitter:title" content="Mint Here"/>
                  <meta property="twitter:description" content="A collection of the chillest BUNNIES on the block(chain)in search of immaculate vibes.  They’re bringing the party to Solana, and you’re invited.
                    Sale information:
                    ▶ Mint Price: 1 Sol
                    ▶ Supply: 888
                    ▶ Limit: up to 4  per wallet"/>
      <title>Bunnies N Homies - MINT</title>
                  <meta name="description" content="Mint your Bunnies NFT" />
                  <meta property="og:site_name" content="This is an automatic announcement message."/>
                  <meta content="https://pbs.twimg.com/profile_images/1513637794953977861/ZPQyAZZC_400x400.jpg" property="og:image"/>
                  <meta name="twitter:card" content="summary_large_image"/>
                  <meta name="theme-color" content="#5584DA"/>
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
