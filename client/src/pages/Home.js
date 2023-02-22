import React from 'react';
import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { QUERY_POSTS } from '../utils/queries';

// import Particles from "react-tsparticles";
// import { loadLinksPreset } from "tsparticles-preset-links";

// function particlesInit(tsParticles) {
//   console.log("init", tsParticles);

//   loadLinksPreset(tsParticles);
// }


const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div className= "flex-row justify-center container">
        <div
          className="col-12 col-md-10 mb-3 p-3 container"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3 container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Some Feed for Post(s)..."
            />
          )}
        </div>
{/* <Particles
          options={{
            preset: "links",
          }}
          init={particlesInit}
        /> */}
        



</div>




    </main>


  );
};

export default Home;
