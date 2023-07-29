import { useAuth } from 'hooks/useAuth';

export const RegisterForm = () => {
  const { register } = useAuth();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const nameEmailPass = Object.fromEntries(formData.entries());

    register(nameEmailPass);
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
