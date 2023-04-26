import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/operations";
import { selectUsers, selectError, selectIsLoading  } from "redux/selectors";
import { UserCard } from "components/UserCard/UserCard";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { Loader } from "components/Loader/Loader";
import { List, Wrapper, NoTweets } from "./UserList.styled";
import oops from '../../images/Oops.jpg';


export const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const [itemsToShow, setItemsToShow] = useState(3);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);
    
    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + 3);
    };

    const VisibleItems = users?.slice(0, itemsToShow);

    return (
        <Wrapper>
            {isLoading && <Loader />}
            {error ? <div style={{
                color: 'red',
                textAlign: 'center',
                height: 'calc(100vh - 280px)'
            }}>
                {error}
                <img src={oops} alt="oops" style={{paddingTop: '30px'}}/>
            </div> : 
            <List>
                {VisibleItems.map(user => (
                    <UserCard
                        key={user.id}
                        userData={user} />
                ))}
            </List>
            }        
            {VisibleItems.length !== users.length && !isLoading && !error &&
                <LoadMoreButton onClick={handleLoadMore} />}
            {VisibleItems.length === users.length && !isLoading && !error &&
                <NoTweets>No more tweets to load</NoTweets>}
        </Wrapper>
    )
};