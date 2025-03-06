import { Button, Card, Center, HStack, Text } from '@chakra-ui/react';
import { LuUser } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import InputWithIcon from '../ui/InputWithIcon';
import { PasswordInput } from '../ui/password-input';

const AuthLayout = ({
   isLogin,
   handleLogin,
   handleRegister,
   loading,
   error,
}) => {
   return (
      <Center
         w='full'
         h='svh'
      >
         <Card.Root>
            <Card.Body
               spaceY={3}
               as='form'
               onSubmit={isLogin ? handleLogin : handleRegister}
            >
               <InputWithIcon
                  type='text'
                  name='username'
                  placeholder='Username'
                  autoComplete='on'
                  startElement={<LuUser />}
                  size='sm'
               />
               {!isLogin && (
                  <InputWithIcon
                     type='email'
                     name='email'
                     placeholder='Email'
                     autoComplete='on'
                     startElement={<MdOutlineMailOutline />}
                     size='sm'
                  />
               )}
               <PasswordInput
                  name='password'
                  placeholder='Password'
                  size='sm'
               />
               {error && (
                  <Text
                     color='red.500'
                     fontSize='xs'
                  >
                     {error}
                  </Text>
               )}
               <Button
                  type='submit'
                  size='sm'
                  disabled={loading}
               >
                  {isLogin ? 'Masuk' : 'Daftar'}
               </Button>
            </Card.Body>
            <Card.Footer mt={-2}>
               <Center w='full'>
                  <HStack fontSize='xs'>
                     <Text>
                        {!isLogin ? 'Sudah punya akun?' : 'Belum punya akun?'}
                     </Text>
                     <Text
                        as={Link}
                        to={isLogin ? '/auth/daftar' : '/auth/masuk'}
                        color='green'
                     >
                        {isLogin ? 'Daftar' : 'Masuk'}
                     </Text>
                  </HStack>
               </Center>
            </Card.Footer>
         </Card.Root>
      </Center>
   );
};

export default AuthLayout;
