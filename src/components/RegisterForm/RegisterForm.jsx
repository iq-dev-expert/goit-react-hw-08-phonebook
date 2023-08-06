import { useAuth } from 'hooks/useAuth';

export const RegisterForm = () => {
  const { register, error } = useAuth();

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const nameEmailPass = Object.fromEntries(formData.entries());

    register(nameEmailPass);
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off" className="form-primary">
        <label className="label-space-between">
          Username*:
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-primary"
          />
        </label>
        <label className="label-space-between">
          Email*:
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="input-primary"
          />
        </label>
        <label className="label-space-between">
          Password*:
          <input type="password" name="password" className="input-primary" />
        </label>
        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  );
};
