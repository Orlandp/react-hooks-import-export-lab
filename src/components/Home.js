import React from 'react';
import { username } from '../data/user'; // Adjust the path as necessary

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>Username: {username}</p> {/* Using the username variable */}
    </div>
  );
}

export default Home;