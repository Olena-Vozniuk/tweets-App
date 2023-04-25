import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import { selectError, selectIsLoading, selectUsers } from "redux/selectors";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/tweets'));


export const App = () => {
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={< Home />} />
                <Route path="/tweets" element={< Tweets />} />
                <Route path="*" element={< Home />} />
            </Route>
        </Routes>
    )
};