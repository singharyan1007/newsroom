
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import '../index.css'
const Home= () => {
  const { openSidebar} = useGlobalContext();
  return (
    <main>
      
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <h3>Zintlr News</h3>
    </main>
  );
};

export default Home;