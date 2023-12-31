import { useAuth } from 'hooks/useAuth';
import { useGlobal } from 'hooks/useGlobal';

export const LoginForm = () => {
  const { logIn } = useAuth();
  const { error } = useGlobal();

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
      <form onSubmit={onSubmit} autoComplete="off" className="form-primary">
        <label className="label-space-between">
          Email*:
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
            className="input-primary"
          />
        </label>
        <label className="label-space-between">
          Password*:
          <input
            type="password"
            name="password"
            required
            minLength={7}
            className="input-primary"
          />
        </label>
        <button type="submit" className="btn-primary">
          Log In
        </button>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  );
};
