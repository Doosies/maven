import MainPage from './MainPage';
// import AdminPage from './pages/adminPage';
// import UserPage from './pages/userPage';
import {BrowserRouter, Route} from 'react-router-dom';
// import UserPage from './pages/userPage';
// import GuestPage from './pages/guestPage';
// import AdminPage from './pages/adminPage';


export default function App(){
    return(
        <BrowserRouter>
            <Route path="/" component={MainPage} exact/>
            {/* <Route path="/login" component={UserPage}/> */}
            {/* <Route path="/guest" component={GuestPage}/>
            <Route path="/admin" component={AdminPage}/> */}
        </BrowserRouter>
        
    );
}