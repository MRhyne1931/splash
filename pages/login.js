import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { useAuth } from '../utils/useAuth'

const Login = () => {
  const auth = useAuth()

  return (
    <PageWrapper title='Log In'>
      <AuthProcess
        process={auth.login}
        icon='smile'
        headingText='Log in to Flossbank'
        submitText='Log in'
        btnLoadingText='Logging in'
        successText='Awaiting Confirmation'
        subSuccessText='Do not close this window until opening the email link.'
        otherProcessText="Don't have an account? "
        otherProcessHref='/signup'
        otherProcessLinkText='Sign up'
      />
    </PageWrapper>
  )
}

export default Login
