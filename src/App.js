import './App.css';

function App() {
  const handleSignup = async () => {
    const randomEmail = Math.random().toString(36).substring(7) + '@user.dd';
    console.log(randomEmail);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": randomEmail,
        "password": "passw",
        "firstName": "John",
        "lastName": "Doe"
      })
    });
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className="App">
      <button
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}

export default App;
