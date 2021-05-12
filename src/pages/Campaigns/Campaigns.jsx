import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Campaigns.css'
import React from 'react'
import Header from '../../components/Header'

const Campaigns = ({ history }) => {
  return (
    <IonPage>
      <Header title={'Campaign'}/>
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

export default Campaigns
