import { useState } from 'react'

import { CardElement } from '@stripe/react-stripe-js'

import { Box } from '@chakra-ui/core'

import ErrorMessage from '../common/errorMessage'

import styles from '../select/donateForm.module.scss'

const BillingForm = () => {
  const [error, setError] = useState('')
  const [cardError, setCardError] = useState('')

  const handleCardChange = (e) => {
    const cardElError = e.error && e.error.message

    // if the user submitted the form and there is a form error, clear it when they change the number to try to fix it
    if (error) {
      setError('')
      return
    }

    setCardError(cardElError || '')
  }

  return (
    <Box
      as='label'
      textAlign='left'
      display='block'
      color='boulder'
      flex='1'
      marginLeft={{ md: '3rem' }}
    >
      Payment Information
      <CardElement
        className={styles.donateInput}
        options={{
          style: {
            base: {
              fontSize: '1rem',
              fontFamily: '"Helvetica Neue", sans-serif',
              color: '#404042'
            }
          }
        }}
        onChange={handleCardChange}
      />
      {(cardError || error) && (
        <ErrorMessage msg={cardError || error} marginTop='.5rem' />
      )}
    </Box>
  )
}

export default BillingForm
