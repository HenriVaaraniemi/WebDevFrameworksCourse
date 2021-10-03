import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
   
   const demo = { color: "white", backgroundColor: "green"};
   demo.fontSize = "30px";
    return (
        <div className={styles.headerBackground}>

            <div className={ styles.container }>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                <div>Etusivu</div>
                <div>Uutiset</div>
                <div>Lehdet</div>
                <div>Asiakaspalvelu</div>
                <div>Tilaa</div>
                <div>Kirjaudu</div>
                <div>Valikko</div> 
       </div>
        </div>
    )
}

