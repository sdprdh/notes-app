import AuthLayout from '@/components/Layouts/AuthLayout';
import { useAuthContext } from '@/hooks/useAuthContext';
import { login } from '@/services/authServices';
import { Box } from '@chakra-ui/react';

const LoginPage = () => {
   const { error, loading, requestAuth } = useAuthContext();

   const handleLogin = async (e) => {
      e.preventDefault();

      const user = {
         username: e.target.username.value,
         password: e.target.password.value,
      };

      await requestAuth(user, login);
   };

   return (
      <Box as='section'>
         <AuthLayout
            isLogin={true}
            handleLogin={handleLogin}
            error={error}
            loading={loading}
         />
      </Box>
   );
};

export default LoginPage;
