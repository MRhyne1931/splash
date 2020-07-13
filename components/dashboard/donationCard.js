import { useState, useRef } from 'react'

import {
  Flex,
  IconButton,
  Icon,
  Text,
  CircularProgress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/core'

import DashboardDataCard from '../dashboard/dashboardDataCard'
import UnderlinedHeading from '../common/underlinedHeading'

import CurrentDonor from './currentDonor'
import UpgradeToDonor from './upgradeToDonor'

const DonationCard = ({ donationAmount, donationLoading }) => {
  const [newDonor, setNewDonor] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()

  const handleDonorUpgrade = () => setNewDonor(true)

  const handleClose = () => {
    setNewDonor(false) // prevents issues when a free user decides to become a donor, but then cancels the changes
    onClose()
  }

  return (
    <>
      <DashboardDataCard backgroundColor='ocean' color='white'>
        {!donationLoading && (
          <Flex align='center' justify='space-between'>
            <Text fontSize='2rem' fontWeight='bold' marginRight='2rem'>
              ${donationAmount}
            </Text>
            <IconButton
              ref={finalRef}
              onClick={onOpen}
              backgroundColor='transparent'
              fontSize='1.5rem'
              _hover={{
                backgroundColor: 'white',
                color: 'ocean'
              }}
              _focus={{
                outlineColor: 'currentColor !important'
              }}
              aria-label='Edit monthly donation'
              icon='edit'
              title='Edit monthly donation'
            />
          </Flex>
        )}
        <UnderlinedHeading
          as='h3'
          id='donation-amt'
          text='Donated Monthly'
          align='left'
          lineColor='white'
          marginBottom='1rem'
        />
        <Text textAlign='left' display='flex' alignItems='center'>
          <Icon name='view-off' marginRight='.75rem' />
          {/* // TODO: get info on if ads are hidden or shown */}
          Ads hidden
        </Text>
        {donationLoading && <CircularProgress isIndeterminate color='ocean' />}
      </DashboardDataCard>
      <Modal isOpen={isOpen} size='xl' onClose={handleClose}>
        <ModalOverlay backgroundColor='rgba(0, 0, 0, .75)' />
        <ModalContent backgroundColor='white' padding='2rem'>
          <ModalHeader>
            <UnderlinedHeading
              text={
                donationAmount > 5
                  ? 'Edit your donation'
                  : 'Become a monthly donor'
              }
              align='left'
              marginBottom='0'
            />
          </ModalHeader>
          <ModalCloseButton />
          {donationAmount > 5 ||
            (newDonor && (
              <CurrentDonor
                donationAmount={donationAmount}
                isNewDonor={newDonor}
                onClose={handleClose}
              />
            ))}
          {donationAmount < 10 && newDonor === false && (
            <UpgradeToDonor
              upgradeToDonor={handleDonorUpgrade}
              onClose={handleClose}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default DonationCard
