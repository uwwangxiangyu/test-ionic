import { Route } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Home from './pages/Home'
import Debug from './pages/Debug'
import Menu from './components/Menu'
import Creators from './pages/Creators'
import Campaigns from './pages/Campaigns'
import { giftOutline, hammerOutline, people } from 'ionicons/icons'

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main" when={'false'}>
        <Menu/>
        <IonTabs>
          <IonRouterOutlet id={'main'}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/debug" component={Debug}/>
            <Route exact path="/creators" component={Creators}/>
            <Route exact path="/campaigns" component={Campaigns}/>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className={'ionTabBar'}>
            <IonTabButton tab="creators" href="/creators">
              <IonIcon icon={people}/>
              <IonLabel>Creators</IonLabel>
            </IonTabButton>
            <IonTabButton tab="campaigns" href="/campaigns">
              <IonIcon icon={giftOutline}/>
              <IonLabel>Campaigns</IonLabel>
            </IonTabButton>
            <IonTabButton tab="debug" href="/debug">
              <IonIcon icon={hammerOutline}/>
              <IonLabel>Debug</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
)

export default App
