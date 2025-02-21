import {Outlet, useLocation} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Toaster} from '@/components/atoms/toaster.jsx'
import Header from "@/components/organisms/Header.jsx";

const DefaultTemplate = () => {
    const {pathname} = useLocation();

    const isNotShowHeader = pathname !== "/login" && pathname !== "/register"

    return (
        <>
            {
                isNotShowHeader &&
                <Header/>
            }
            <Box as='main'>
                <Outlet/>
            </Box>
            <Toaster/>
        </>
    );
};

export default DefaultTemplate;