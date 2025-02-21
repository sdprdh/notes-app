import {Box, Card, Center, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import InputGrouping from "@/components/molecules/InputGrouping.jsx";
import ButtonFullWidth from "@/components/molecules/ButtonFullWidth.jsx";
import ErrorText from "@/components/molecules/ErrorText.jsx";

const AuthTemplate = (
    {
        isLogin,
        error,
        loading,
        handleSubmitLogin = () => {
        },
        handleSubmitRegister = () => {
        }
    }) => {

    return (
        <Center h='100vh'>
            <form onSubmit={isLogin ? handleSubmitLogin : handleSubmitRegister}>
                <Card.Root w='20rem' rounded={'md'}>
                    <Card.Header>
                        <Card.Title>
                            {
                                isLogin ? 'Login' : 'Register'
                            }
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Stack gap="2" w="full">
                            {
                                !isLogin &&
                                <InputGrouping
                                    type='text'
                                    name='username'
                                    label='Username'
                                    placeholder='Enter username'
                                />
                            }
                            <InputGrouping
                                type='email'
                                name='email'
                                label='Email'
                                placeholder='Enter email address'
                            />
                            <InputGrouping
                                type='password'
                                name='password'
                                label='Password'
                                placeholder='Enter password'
                            />
                        </Stack>
                        <ErrorText error={error}/>
                    </Card.Body>
                    <Card.Footer mt={-4}>
                        <Box w='full' spaceY={4}>
                            <ButtonFullWidth type='submit' disable={loading}>
                                {isLogin ? 'Login' : 'Register'}
                            </ButtonFullWidth>
                            <Text
                                fontSize='xs'
                                textAlign='center'
                            >
                                {
                                    isLogin ? 'Not registered yet' : 'Already have an account'
                                }? {' '}
                                <Box
                                    as={Link}
                                    to={isLogin ? '/register' : '/login'}
                                    color='blue.500'
                                >
                                    {
                                        isLogin ? 'Register' : 'Login'
                                    }
                                </Box>
                            </Text>
                        </Box>
                    </Card.Footer>
                </Card.Root>
            </form>
        </Center>
    );
};

export default AuthTemplate;