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
            required
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className="input-primary"
          />
        </label>
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
          Register
        </button>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  );
};
