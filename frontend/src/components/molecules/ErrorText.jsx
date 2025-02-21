import {Text} from "@chakra-ui/react";

const ErrorText = ({error}) => {
    return (
        error &&
        <Text
            fontSize='xs'
            color='red.500'
            fontWeight={300}
            mt={2}
        >
            {error}
        </Text>
    );
};

export default ErrorText;