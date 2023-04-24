import { BackLink } from "components/BackLink/BackLink";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { UserList } from "components/UserList/UserList";


export default function Tweets() {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/");

    return (
        <div style={{padding: '20px'}}>
            <BackLink to={backLinkLocationRef.current}/>
            <UserList />
        </div>
    );
};