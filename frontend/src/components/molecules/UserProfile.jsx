import {Avatar} from "@/components/atoms/avatar.jsx";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger,} from '@/components/atoms/menu.jsx';
import {IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import {useAuthContext} from "@/hooks/useAuthContext.js";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const {user, logut} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logut()

        navigate("/login");
    }

    return (
        <MenuRoot>
            <MenuTrigger cursor='pointer' outline='none'>
                <Avatar name={user?.username} variant="subtle"/>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="settings" valueText='settings'>
                    <IoSettingsOutline/>
                    <button style={{outline: 'none'}}>
                        Settings
                    </button>
                </MenuItem>
                <MenuItem
                    value="logout"
                    valueText='logout'
                    color="fg.error"
                    _hover={{bg: "bg.error", color: "fg.error"}}
                >
                    <IoLogOutOutline/>
                    <button style={{outline: 'none'}} onClick={handleLogout}>
                        Logout
                    </button>
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};

export default UserProfile;