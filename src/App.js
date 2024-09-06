import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remenber, setRemenber] = React.useState(false);
  return (
      <LoginForm 
        email={email} 
        setEmail={setEmail}
        password={password} 
        setPassword={setPassword}    
        remenber={remenber}  
        setRemenber={setRemenber} 
      />
  );
}

export default App;
