import React from 'react'
import '../components/Footer.css'

const Footer = () => {
    var currentDate = new Date();
  return (
    <footer>Copyright @{ currentDate.getUTCFullYear() }. Designed by Dil</footer>
  )
}

export default Footer