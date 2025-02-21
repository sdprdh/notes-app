import SectionTemplate from "@/components/templates/SectionTemplate.jsx";
import AuthTemplate from "@/components/templates/AuthTemplate.jsx";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "@/hooks/useAuthContext.js";
import {toaster} from "@/components/atoms/toaster.jsx";

const Register = () => {
    const {error, loading, register} = useAuthContext();
    const navigate = useNavigate();

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const response = await register(user);

        if (response.status < 400) {
            toaster.create({
                title: response.data.message,
                duration: 3000,
            })

            navigate("/");
        }

    };
    return (
        <SectionTemplate>
            <AuthTemplate
                isLogin={false}
                handleSubmitRegister={handleSubmitRegister}
                loading={loading}
                error={error}
            />
        </SectionTemplate>
    );
};

export default Register;
