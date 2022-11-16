import React from 'react'
import styles from '../footer/Footer.module.css'
import houseWhite from "../../assets/white.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import ceee from "../../assets/ceee.png"
function Footer() {
  return (
    <footer>
    <div  className={styles.container}>

   <div className={styles.topIcon}>
   


<img className={styles.topIcon} src={houseWhite} alt="" />
<div className={styles.socialsHandle}>

<img src={facebook} alt="" />
<img src={instagram} alt="" />
<img src={twitter} alt="" />
</div>
</div>

<div>
                    <h3>Community</h3>
                    <ul>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div>
                    <h3>Places</h3>
                    <ul>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div>
                <h3>About us</h3>
                    <ul>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
 </div> 



   </footer>
  )
}

export default Footer


