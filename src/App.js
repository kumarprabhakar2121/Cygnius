

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,Link , Redirect } from 'react-router-dom';
import "./style.css";
import "./TherapistRequests.css";
import "./ListTherapists.css";
import "./SidebarAndNavbar.css";

/* Pages */
import NotFoundPage from './Pages/NotFoundPage';
import ListTherapists from "./Pages/ClientPages/ListTherapists";
import SearchFindTherapists from "./Pages/ClientPages/SearchFindTherapists";
import TherapistRequests from "./Pages/ClientPages/TherapistRequests";
import NotesSharedByTherapists from "./Pages/ClientPages/NotesSharedByTherapists";
import MyJournals from "./Pages/ClientPages/MyJournals";
import ClientsAppointments from "./Pages/ClientPages/ClientsAppointments";
import Messages from "./Pages/ClientPages/Messages";
import AddAppointment from './Pages/ClientPages/AddAppointment';
import AddNewJournal from "./Pages/ClientPages/AddNewJournal"
import LogInSignUpPage from './LogInSignUp';
import LoginForm from './LoginForm';
import JournalAccessRequestsList from "./Pages/ClientPages/JournalAccessRequestsList"
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Switch>
             {/* <Route path="/" component={LoginForm} exact/> */}
             <Route path="/" component={ListTherapists} exact/>
             <Route path="/ListTherapists" component={ListTherapists} exact/>
             <Route path="/SearchFindTherapists" component={SearchFindTherapists} exact/>
             <Route path="/TherapistRequests" component={TherapistRequests} exact/>
             <Route path="/NotesSharedByTherapists" component={NotesSharedByTherapists} exact/>
             <Route path="/MyJournals" component={MyJournals} exact/>
             <Route path="/AddNewJournal" component={AddNewJournal} exact/>
             <Route path="/JournalAccessRequestsList" component={JournalAccessRequestsList} exact/>
             <Route path="/ClientsAppointments" component={ClientsAppointments} exact/>
             <Route path="/AddAppointment" component={AddAppointment} exact/>
             <Route path="/Messages" component={Messages} exact/>
             <Route path="/404" component={NotFoundPage}/>
            <Route component={NotFoundPage}/>
            <Redirect to="/404" />
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

