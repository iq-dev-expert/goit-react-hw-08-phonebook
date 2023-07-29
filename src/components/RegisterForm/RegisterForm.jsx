import { useAuth } from 'hooks/useAuth';

export const RegisterForm = () => {
  const { register } = useAuth();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    register({ name, email, password });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
