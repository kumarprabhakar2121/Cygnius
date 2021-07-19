

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Link , Redirect } from 'react-router-dom';
import "./style.css";
import "./TherapistRequests.css";
import "./ListTherapists.css";
import "./SidebarAndNavbar.css";
/* Pages */
import NotFoundPage from './Pages/NotFoundPage';
import Appointments from "./Pages/TherapistPages/Appointments";
import ClientRequest from "./Pages/TherapistPages/ClientRequest";
import ListClients from "./Pages/TherapistPages/ListClients";
import Messages16 from "./Pages/TherapistPages/Messages";
import Notes from "./Pages/TherapistPages/Notes";
import SearchFindClients from "./Pages/TherapistPages/SearchFindClients";



class App2 extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Switch>
             <Route path="/" component={ListClients} exact/>
             <Route path="/ListClients" component={ListClients} exact/>
             <Route path="/SearchFindClients" component={SearchFindClients} exact/>
             <Route path="/ClientRequest" component={ClientRequest} exact/>
             <Route path="/Appointments" component={Appointments} exact/>
             <Route path="/Notes" component={Notes} exact/>
             <Route path="/Messages16" component={Messages16} exact/>
             <Route path="/404" component={NotFoundPage}/>
            <Route component={NotFoundPage}/>
            <Redirect to="/404" />
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App2;