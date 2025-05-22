import './App.css'
import { ForgotPassword } from './ForgotPassword'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { Verification } from './Verification'

export const App = () => {
return <>
<SignUp />
<SignIn />
<ForgotPassword />
<Verification />
</>
}


