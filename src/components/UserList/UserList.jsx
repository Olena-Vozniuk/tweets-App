import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/operations";
import { selectUsers } from "redux/selectors";
import { UserCard } from "components/UserCard/UserCard";
import { LoadMoreButton } from "components/LoadMoreButton/LoadMoreButton";
import { List, Wrapper, NoTweets } from "./UserList.styled";


export const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);
    
    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + 3);
    };

    const VisibleItems = users?.slice(0, itemsToShow);

    return (
        <Wrapper>
            <List>
                {VisibleItems.map(user => (
                    <UserCard
                        key={user.id}
                        userData={user} />
                ))}
            </List>
            {VisibleItems.length !== users.length && <LoadMoreButton onClick={handleLoadMore} />}
            {VisibleItems.length === users.length && <NoTweets>No more tweets to load</NoTweets>}
        </Wrapper>
    )
};