import {ColorModeButton, useColorMode} from "@/components/atoms/color-mode.jsx"


const ToggleMode = () => {
    const {toggleColorMode} = useColorMode();

    return (
        <>
            <ColorModeButton bg='none'/>
        </>
    );
};

export default ToggleMode;