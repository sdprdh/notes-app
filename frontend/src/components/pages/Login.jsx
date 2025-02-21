import SectionTemplate from "@/components/templates/SectionTemplate.jsx";
import AuthTemplate from "@/components/templates/AuthTemplate.jsx";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "@/hooks/useAuthContext.js";
import {toaster} from "@/components/atoms/toaster.jsx";

const Login = () => {
    const {error, loading, login} = useAuthContext()

    const navigate = useNavigate();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const response = await login(user);

        if (response.status < 400) {
            toaster.create({
                title: response.data.message,
                duration: 3000,
            })

            navigate("/");
        }
    }

    return (
        <SectionTemplate>
            <AuthTemplate
                isLogin={true}
                handleSubmitLogin={handleSubmitLogin}
                error={error}
                loading={loading}
            />
        </SectionTemplate>
    );
};

export default Login;