import { useState } from 'react'

import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  Heading,
  FormControl,
  FormLabel
} from '@chakra-ui/core'

import { useForm } from 'react-hook-form'

import PropTypes from 'prop-types'

import Section from './section'
import Card from './card'
import FBButton from './fbButton'
import TextLink from './textLink'
import ErrorMessage from './errorMessage'

const AuthProcess = ({
  process,
  icon,
  headingText,
  submitText,
  successText,
  btnLoadingText,
  otherProcessLinkText,
  otherProcessText,
  otherProcessHref
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')

  const { register, handleSubmit, errors } = useForm()

  const handleProcess = async ({ email }, e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Will pass login or signup from client
      await process({ email })
      setSent(true)
      setFormError('')
    } catch (e) {
      switch (e.status) {
        case 404:
          setFormError(
            "The email you entered doesn't match our records. Please try again or try signing up"
          )
          break
        case 409:
          setFormError("Looks like you're already signed up! Try logging in.")
          break
        default:
          setFormError(
            'There was an error submitting the form. Please try again!'
          )
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section
      backgroundColor='lightRock'
      minHeight={{ lg: '75vh' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flex='1'
      flexDirection='column'
      paddingBottom={{ lg: '6rem !important' }}
    >
      <Heading
        as='h1'
        className={sent && !formError ? 'sr-only' : ''}
        fontSize='1.5rem'
        fontWeight='400'
        marginBottom='3rem'
      >
        {headingText}
      </Heading>
      {!sent && (
        <>
          <Card
            marginBottom='3rem'
            width='100%'
            maxW='30rem'
            aria-atomic='true'
          >
            <Box as='form' onSubmit={handleSubmit(handleProcess)} noValidate>
              {formError && <ErrorMessage msg={formError} />}
              <FormControl marginBottom='2.25rem' isRequired>
                <FormLabel htmlFor='email' marginBottom='.5rem'>
                  Email address
                </FormLabel>
                <Box aria-atomic='true' id='email-error'>
                  {errors.email && (
                    <ErrorMessage msg='Please provide a valid email address' />
                  )}
                </Box>
                <Input
                  type='email'
                  id='email'
                  backgroundColor='lightRock'
                  name='email'
                  aria-describedby='email-error'
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^\S+@\S+$/i
                    }
                  })}
                />
              </FormControl>
              <FBButton
                isLoading={isSubmitting}
                loadingText={btnLoadingText}
                type='submit'
              >
                {submitText}
              </FBButton>
            </Box>
          </Card>
          <Box
            width='100%'
            maxW='30rem'
            textAlign={{ base: 'center', lg: 'left' }}
            paddingLeft={{ lg: '3.125rem' }}
          >
            <Text>
              {otherProcessText}{' '}
              <TextLink href={otherProcessHref} text={otherProcessLinkText} />
            </Text>
          </Box>
        </>
      )}
      {sent && !formError && (
        <Flex
          direction='column'
          align='center'
          justify='space-between'
          aria-live='polite'
        >
          <Icon name={icon} size='6rem' marginBottom='1.5rem' />
          <Heading
            as='h2'
            fontSize='1.5rem'
            fontWeight='400'
            marginBottom='1.5rem'
          >
            Success!
          </Heading>
          <Text>{successText}</Text>
        </Flex>
      )}
    </Section>
  )
}

AuthProcess.propTypes = {
  // pass login or sign up from client
  process: PropTypes.func.isRequired,
  // text for the submit button
  submitText: PropTypes.string.isRequired,
  // message to show if process was successful
  successText: PropTypes.string.isRequired,
  // text to go below the form
  otherProcessText: PropTypes.string.isRequired,
  otherProcessHref: PropTypes.string.isRequired,
  otherProcessLinkText: PropTypes.string.isRequired
}
export default AuthProcess