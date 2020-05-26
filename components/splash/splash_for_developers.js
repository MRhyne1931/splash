import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Icon
} from '@chakra-ui/core'

import SplashDivider from './splash_divider'
import useMedia from '../common/useMedia'
import FBButton from '../common/button'

const SplashForDevelopers = (props) => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Box id={props.id}>
      {isWide ? <Flex flexDirection='row' padding='60px' paddingLeft='150px' height='80vh' paddingRight='150px' justify='space-between'>
        <Flex flexDirection='column' width='40%' justify='space-between'>
          <Text fontWeight='bold' fontSize='14px' marginBottom='10px'>
            {'for developers'.toUpperCase()}
          </Text>
          <SplashDivider />
          <Heading marginTop='20px' marginBottom='30px' fontSize='24px'>
            Give back to maintainers across your entire dependency tree
          </Heading>
          <Text fontSize='16px' marginBottom='8px'>
            Flossbank provides a free and frictionless way to give back to open source maintainers, 
            especially those who don’t have time for self promotion. 
          </Text>
          <Text fontSize='16px' marginBottom='30px'>
            By installing our CLI, you support maintainers across the entire dependency 
            tree of your installed packages in one of two ways: terminal ads or monthly contributions.
          </Text>
          <Box height='40px'>
            <FBButton backgroundColor='ocean' color='white' _hover={{ marginTop: '3px' }}>
              Sign up
            </FBButton>
          </Box>
          <Text marginTop='30px'>
            Are you an author or maintainer?
          </Text>
          <Text>
            Sign up for our beta list.
          </Text>
        </Flex>
        <Flex flexDirection='column' width='50%' justify='space-around' paddingTop='50px'>
          <Flex padding='20px' backgroundColor='lightRock' height='180px' flexDirection='column' justify='space-around'>
            <Flex flexDirection='row'>
              <Flex flexDirection='column' justify='space-around'>
                <Icon name='terminal' size='50px' marginLeft='30px' marginRight='30px' />
              </Flex>
              <Flex flexDirection='column' justify='space-around'>
                <Text fontWeight='bold' fontSize='14px'>
                  {'Support maintainers at no cost'.toUpperCase()}
                </Text>
                <SplashDivider backgroundColor='ocean' borderColor='ocean'/>
                <Text>
                  Opt into curated, tech-focused ads in your terminal when you install open source packages
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex padding='20px' backgroundColor='lightRock' height='180px' flexDirection='column' justify='space-around'>
            <Flex flexDirection='row'>
              <Flex flexDirection='column' justify='space-around'>
                <Icon name='calendar' size='50px' marginLeft='30px' marginRight='30px' />
              </Flex>
              <Flex flexDirection='column' justify='space-around'>
                <Text fontWeight='bold' fontSize='14px'>
                  {'Or set a monthly donation'.toUpperCase()}
                </Text>
                <SplashDivider backgroundColor='ocean' borderColor='ocean' />
                <Text>
                  Donate monthly to the developers and maintainers of the open source packages you install
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex> :
      <Flex flexDirection='column'>

      </Flex>}
    </Box>
  )
} 

export default SplashForDevelopers