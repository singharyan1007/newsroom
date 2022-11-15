import React,{useState,useRef,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Navbar() {
  const [showLinks,setShowLinks]=useState(false);
  const linksContainerRef=useRef(null);
  const linksRef=useRef(null);
  const toggleLinks=()=>{
    setShowLinks(!setShowLinks);
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src='#' className='logo' alt='logo' />
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar