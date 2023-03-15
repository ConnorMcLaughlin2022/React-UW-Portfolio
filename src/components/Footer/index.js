
import React from 'react'
import './style.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-ul'>
            <li className='footer-li'>
               <a className='footer-a' href="https://github.com/ConnorMcLaughlin2022">Github</a> 
            </li>
            <li className='footer-li'>
               <a className='footer-a' href="https://stackoverflow.com/users/20295977/connor-mclaughlin">Stack Overflow</a> 
            </li>
            <li className='footer-li'>
               <a className='footer-a' href="https://www.linkedin.com">Linkedin</a> 
            </li>
            
        </ul>
    </div>
  )
}
export default Footer;