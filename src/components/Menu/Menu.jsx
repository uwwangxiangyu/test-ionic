import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import { withRouter } from 'react-router'

const Menu = ({ history }) => {

  return (
    <IonMenu side="start" menuId="custom" contentId={'main'}>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent forceOverscroll={false}>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem routerLink={'/'}>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink={'/creators'}>
              <IonLabel>Creators</IonLabel>
            </IonItem>
            <IonItem routerLink={'/campaigns'}>
              <IonLabel>Campaigns</IonLabel>
            </IonItem>
            <IonItem routerLink={'/debug'}>
              <IonLabel>Debug</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Menu)
