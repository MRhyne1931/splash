import { useAuth } from '../../../utils/useAuth'

import { Box, Flex } from '@chakra-ui/core'

import LinkBtn from '../linkBtn'
import TextLink from '../textLink'
import FBLogo from './logo'
import AuthNav from './authNav'

const Header = () => {
  const user = useAuth().user; // eslint-disable-line

  return (
    <>
      <Box as='header' padding={['1rem', '1.5rem', '1.5rem 5rem']}>
        <Flex alignItems='center' justify='space-between' flexDirection='row'>
          <FBLogo authed={!!user} />
          <Box
            as='nav'
            display='flex'
            flex='1'
            alignItems='center'
            justifyContent={user ? 'flex-end' : 'space-between'}
            marginLeft={['2.25rem', 'auto']}
            maxW='22.5rem'
            aria-label='Primary navigation'
          >
            {user && <AuthNav user={user} />}
            {!user && (
              <>
                <TextLink
                  href='/about'
                  text='About Us'
                  color='boulder'
                  padding='.25em'
                />
                <TextLink
                  href='/login'
                  text='Log In'
                  color='boulder'
                  padding='.25em'
                />
                <LinkBtn
                  href='/signup'
                  backgroundColor='transparent'
                  minW='unset'
                  color='ocean'
                  borderWidth='1px'
                  padding={['.5rem 1rem', '.75rem 2rem']}
                  margin='10px'
                  _hover={{ backgroundColor: 'ocean', color: 'white' }}
                >
                  Sign Up
                </LinkBtn>
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Header