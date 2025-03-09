import AuthLayout from '@/components/Layouts/AuthLayout';
import { useAuthContext } from '@/hooks/context/useAuthContext';
import { useAuthHandler } from '@/hooks/handler/useAuthHandler';
import { Box } from '@chakra-ui/react';

const LoginPage = () => {
   const { error, loading } = useAuthContext();

   const { handleLogin } = useAuthHandler();

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
