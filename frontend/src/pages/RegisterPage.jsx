import AuthLayout from '@/components/Layouts/AuthLayout';
import { useAuthContext } from '@/hooks/useAuthContext';
import { register } from '@/services/authServices';
import { Box } from '@chakra-ui/react';

const RegisterPage = () => {
   const { error, loading, requestAuth } = useAuthContext();

   const handleRegister = async (e) => {
      e.preventDefault();

      const user = {
         username: e.target.username.value,
         email: e.target.email.value,
         password: e.target.password.value,
      };

      await requestAuth(user, register);
   };

   return (
      <Box as='section'>
         <AuthLayout
            isLogin={false}
            handleRegister={handleRegister}
            loading={loading}
            error={error}
         />
      </Box>
   );
};

export default RegisterPage;
