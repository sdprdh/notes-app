import AuthLayout from '@/components/Layouts/AuthLayout';
import { useAuthContext } from '@/hooks/context/useAuthContext';
import { useAuthHandler } from '@/hooks/handler/useAuthHandler';
import { Box } from '@chakra-ui/react';

const RegisterPage = () => {
   const { error, loading } = useAuthContext();

   const { handleRegister } = useAuthHandler();

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
