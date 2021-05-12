import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Creators.css'
import React from 'react'
import Header from '../../components/Header'

const Creators = ({ history }) => {
  return (
    <IonPage>
      <Header title={'Creator'}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default Creators
