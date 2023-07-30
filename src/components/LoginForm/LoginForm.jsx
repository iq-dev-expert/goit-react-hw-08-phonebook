import { useAuth } from 'hooks/useAuth';

export const LoginForm = () => {
  const { logIn, error } = useAuth();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    logIn({ email, password });
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};
