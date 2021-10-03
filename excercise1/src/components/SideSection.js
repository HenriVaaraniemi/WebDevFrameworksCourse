import React from 'react'
import styles from "./Side.module.css";
export default function SideSection() {
    return (
        <div className={styles.sidebar}>
                
        <div className={styles.otsikko}> Luetuimmat  </div> 
        <div>_________________________________</div>
        <div><span className={styles.ranked} >1</span>Koronafaktaa |</div>
        
        <div className={styles.separate}>_________________________________</div>
        <div><span className={styles.ranked} >2</span>Nuoret |</div>
       
        <div className={styles.separate}>_________________________________</div>
        <div><span className={styles.ranked} >3</span>HS Visio |</div>
         
     </div>
     
    )
}
