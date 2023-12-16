import React,{useState} from "react";

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
  
      // Email validation
      const isValidEmail = /\S+@\S+\.\S+/.test(e.target.value);
      setEmailError(isValidEmail ? '' : 'Invalid email address');
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  
      // Password validation
      const isValidPassword = e.target.value.length >= 8;
      setPasswordError(isValidPassword ? '' : 'Password must be at least 8 characters long');
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
  
      // Confirm Password validation
      const isMatchingPassword = e.target.value === password;
      setConfirmPasswordError(isMatchingPassword ? '' : 'Passwords do not match');
    };
  
    const handleSubmit = () => {
      // Checking if all inputs are valid
      if (emailError || passwordError || confirmPasswordError) {
        alert("Can't submit the form. Please check the errors.");
      } else {
        alert('Form submitted successfully!');
      }
    };
    return (
        <div>
          
          <div id="main">
          <div>
            <label>Email:</label>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: emailError ? 'red' : 'green' }}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div>
            <label>Password:</label>
            <br></br>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ borderColor: passwordError ? 'red' : 'green' }}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <br></br>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ borderColor: confirmPasswordError ? 'red' : 'green' }}
            />
            {confirmPasswordError && <p>{confirmPasswordError}</p>}
          </div>
          <button id="button" onClick={handleSubmit}>SignUp</button>
          </div>
        </div>
      );
};
export default App;