import type { NextPage } from 'next';
import Head from 'next/head';
import { Title } from '../components/Title/Title';
import { Cards } from '../components/Cards/Cards';
import data from '../data/profil.json';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kevin LE FRANC</title>
        <meta
          name="description"
          content="Portfolio generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Title />
        </div>
        <div className="mt-20">
          <div className="transform -skew-y-2 bg-primary h-32 ml-auto mr-auto flex justify-center items-center content-center">
            <h2 className="transform skew-y-2 text-2xl overflow-hidden text-center self-center text-white">
              My professionnal projects
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-12">
            {data.experiences.map((experience: any) => {
              return <Cards key={experience.id} {...experience} />;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
