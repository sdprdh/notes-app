import {Box} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

const SectionTemplate = ({children}) => {
    const {pathname} = useLocation();

    const p = (pathname !== '/login' && pathname !== '/register') ? '2rem 4rem' : 0;

    return (
        <Box
            as='section'
            w='full'
            minH='100vh'
            p={p}
        >
            {children}
        </Box>
    );
};

export default SectionTemplate;