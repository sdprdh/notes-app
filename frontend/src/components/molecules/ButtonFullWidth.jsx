import {Button} from "@chakra-ui/react";

const ButtonFullWidth = ({children, type = 'button', colorPalette = 'blue', disable = false}) => {
    return (
        <Button
            type={type}
            colorPalette={colorPalette}
            w='full'
            size='xs'
            disabled={disable}
        >
            {children}
        </Button>
    );
};

export default ButtonFullWidth;