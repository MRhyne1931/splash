import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react'

import FBButton from '../common/button'
import FBLogoLetters from '../common/logoLetters'
import useMedia from '../common/useMedia'
import { login, signup } from '../../client'

const LoginSection = () => {
  const isWide = useMedia('(min-width: 800px')
  const router = useRouter()
  const [loginFlow, setLoginFlow] = useState(router.query?.login || false)
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const loginText = () => {
    return loginFlow ? 'Log in' : 'Sign up'
  }

  const getSuccessText = () => {
    const action = loginFlow ? 'logging in!' : 'registering!'
    return `Success! Click the magic link in your email to finish ${action}`
  }

  const loginOrSignup = async (e) => {
    e.preventDefault()
    if (!email) return showErrorMessage('Email is required')
    setIsSending(true)
    try {
      if (loginFlow) {
        await login({ email })
      } else {
        await signup({ email })
      }
      setEmailSent(true)
    } catch (e) {
      showErrorMessage('Something went wrong, please try again')
    } finally {
      setIsSending(false)
    }
  }

  const showErrorMessage = (msg) => {
    setInvalid(true)
    setError(msg)
  }

  const onEmailChange = (e) => {
    if (!e.target.value) return showErrorMessage('Email is required')
    setInvalid(false)
    setEmail(e.target.value)
  }

  const toggleStateComponent = () => {
    return loginFlow ? (
      <Flex flexDirection='row'>
        <Text marginRight='5px'>Don't have an account?</Text>
        <Button onClick={() => setLoginFlow(false)} variant='link' color='black'>Sign up</Button>
      </Flex>
    ) : (
      <Flex flexDirection='row'>
        <Text marginRight='5px'>Already have an account?</Text>
        <Button onClick={() => setLoginFlow(true)} variant='link' color='black'>Log in</Button>
      </Flex>
    )
  }

  return (
    <>
      <Flex width='full' backgroundColor='lightRock' height='45rem' flexDirection='row' justify='space-around'>
        <Box paddingTop='60px'>
          {isWide && (
            <Box margin='0 auto 0 auto' width='40px' height='60px'>
              <FBLogoLetters />
            </Box>
          )}
          <Flex
            flexDirection='column'
            backgroundColor='white'
            width={['100%', '400px']}
            padding='30px'
            marginTop='30px'
            height='14rem'
          >
            {!emailSent ? (
              <Box as='form' onSubmit={loginOrSignup}>
                <FormControl marginBottom='20px' isRequired isInvalid={invalid}>
                  <FormLabel htmlFor='email'>Email address</FormLabel>
                  <Input
                    type='email'
                    id='email'
                    backgroundColor='lightRock'
                    onChange={onEmailChange}
                  />
                  <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <FBButton
                  isLoading={isSending}
                  type='submit'
                  backgroundColor='ocean'
                  color='white'
                  _hover={{ marginTop: '3px' }}
                >{loginText()}
                </FBButton>
              </Box>
            ) : (
              <Box textAlign='center'>
                <Text marginBottom='2rem'>{getSuccessText()}</Text>
                <Text>You can now close this tab</Text>
              </Box>
            )}
          </Flex>
          {!emailSent && (
            <Flex flexDirection='column' width={['100%', '400px']} padding='30px'>
              {toggleStateComponent()}
            </Flex>
          )}
        </Box>
      </Flex>
    </>
  )
}

export default LoginSection
