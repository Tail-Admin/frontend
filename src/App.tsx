import './App.css'
import { ForgotPassword } from './ForgotPassword'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { Verification } from './Verification'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const App = () => {
return <Provider store={store}>
<SignUp />
<SignIn />
<ForgotPassword />
<Verification />
</Provider>
}


