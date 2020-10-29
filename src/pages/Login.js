export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username: </label>
      <input name="username" type="text" id="username" />
      <br />
      <label htmlFor="password">Senha: </label>
      <input name="password" type="password" id="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
