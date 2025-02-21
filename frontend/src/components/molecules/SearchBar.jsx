import {useState} from "react";
import {Box, Input} from "@chakra-ui/react";
import {InputGroup} from "@/components/atoms/input-group.jsx";
import {LuSearch} from "react-icons/lu";
import {useSearchParams} from "react-router-dom";

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("Search") || "");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value) {
            setSearchParams({Search: value});
        } else {
            setSearchParams({});
        }
    };

    return (
        <Box>
            <InputGroup w="30rem" endElement={<LuSearch/>}>
                <Input
                    name="search"
                    size="xs"
                    rounded="md"
                    placeholder="Search Notes..."
                    value={search}
                    onChange={handleSearch}
                />
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
