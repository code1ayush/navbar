import React,{useState} from 'react'
import {FaBars} from 'react-icons/fa';
import{links,social} from './data'
import logo from './logo.svg';
import './App.css';

function Navbar() {
    const[show,setShow] = useState(false);
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt={"hello"}/>
              <button className="nav-toggle" onClick={()=> setShow(!show)}>
                <FaBars/>
              </button>
            </div>
               
                <ul className={`${show?'links-container show-container':'links-container'}`}>
                    {links.map((link)=>{
                        const{id,url,text} = link;
                        return(
                            <article key={id}>
                             <li>
                                <a href={url}>{text}</a>
                             </li>
                            </article>
                        )
                    })}
                </ul>
                </div>
                      <ul className="social-icons">
                    {social.map((icons)=>{
                        const{id,url,icon} = icons;
                        return(
                            <article key={id}>
                                <li>
                                    <a href={url}>{icon}</a>
                                </li>
                            </article>
                        )
                    })}
                      </ul>
        
    </nav>
  )
}

export default Navbar
