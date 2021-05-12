import { IonAvatar, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Header = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {/*<IonButtons slot="start" className={styles.buttons}>*/}
        {/*  <IonMenuButton autoHide={'false'} menu={'custom'} type={'overlay'}/>*/}
        {/*</IonButtons>*/}
        <IonTitle>{title}</IonTitle>
        <IonAvatar slot={'end'}>
          <img src="https://staging-dot-scraper-1ccc.ue.r.appspot.com/instagram/avatar/arabella.rollison" alt={'avatar'} style={{ padding: '8px' }}/>
        </IonAvatar>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header