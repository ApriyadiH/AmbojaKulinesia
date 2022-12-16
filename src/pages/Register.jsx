import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // check that the password and confirm password fields match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // send a request to the server to create a new user account
    if (name && email && password) {
      // account successfully created, redirect the user to the login page
      window.location = '/login';
    } else {
      // there was an error, show an error message
      setError('Please enter a name, email, and password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
      </label>
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Sign up</button>
    </form>
  );
}

export default RegisterForm;