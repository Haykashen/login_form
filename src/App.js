import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  return (
      <LoginForm 
        email={email} 
        setEmail={setEmail}
        password={password} 
        setPassword={setPassword}    
        remember={remember}  
        setRemember={setRemember} 
      />
  );
}

export default App;
