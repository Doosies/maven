import MainPage from './pages/MainPage';
// import AdminPage from './pages/adminPage';
// import UserPage from './pages/userPage';
import {BrowserRouter, Route} from 'react-router-dom';
import Todo from './pages/Todo';
import StudyPage from './pages/studyPage';
// import UserPage from './pages/userPage';
// import GuestPage from './pages/guestPage';
// import AdminPage from './pages/adminPage';


export default function App(){
    return(
        <BrowserRouter>
            <Route path="/button" component={MainPage} exact/>
            <Route path="/todoList" component={Todo}/>
            <Route path="" component={StudyPage}/>
            {/* <Route path="/login" component={UserPage}/> */}
            {/* <Route path="/guest" component={GuestPage}/>
            <Route path="/admin" component={AdminPage}/> */}
        </BrowserRouter>
        
    );
}