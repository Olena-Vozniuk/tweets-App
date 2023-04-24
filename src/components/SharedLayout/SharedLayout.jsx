import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "components/AppBar/AppBar";
import { Footer } from "components/Footer/Footer";

export default function SharedLayout () {
    return (
        <div>
            <AppBar/>
            <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
};