import Users from "../components/APi/Users";
import { UsersProvider } from "../components/APi/UsersProvider";

export default function ConnectApi(){
    return(
        <div>
            <UsersProvider>
                <Users/>
            </UsersProvider>
        </div>
    );
}