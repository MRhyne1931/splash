import { Link as ChakraLink } from '@chakra-ui/core'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from './textLink.module.scss'

// destructuring children so if someone passes children (which we don't want), it doesn't funk things up
const TextLink = ({ href, text, children, external, ...props }) => (
  <>
    {!external ? (
      <Link href={href}>
        <ChakraLink className={styles.link} {...props}>
          {text}
        </ChakraLink>
      </Link>
    ) : (
      <ChakraLink href={href} className={styles.link} {...props}>
        {text}
      </ChakraLink>
    )}
  </>
)

TextLink.defaultProps = {
  color: 'ocean',
  fontWeight: 500,
  display: 'initial'
}

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  external: PropTypes.bool
}

export default TextLink
