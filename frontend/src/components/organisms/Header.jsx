import {Flex, Heading, HStack} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/atoms/color-mode.jsx";
import SearchBar from "@/components/molecules/SearchBar.jsx";
import UserProfile from "@/components/molecules/UserProfile.jsx";
import ToggleMode from "@/components/molecules/ToggleMode.jsx";

const Header = () => {
    return (
        <Flex
            as='header'
            w='full'
            p='1rem 4rem'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            borderBottom='1px solid #eee'
            bg={useColorModeValue('white', 'gray.900')}
        >
            <Heading size='2xl'>Notes</Heading>

            <HStack>
                <SearchBar/>
                <ToggleMode/>
                <UserProfile/>
            </HStack>
        </Flex>
    );
};

export default Header;