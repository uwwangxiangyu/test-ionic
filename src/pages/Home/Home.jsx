import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Home.css'

const Home = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonButton onClick={e => {
            e.preventDefault()
            history.push('/debug')
          }}>
            <IonLabel>Debug</IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Home
