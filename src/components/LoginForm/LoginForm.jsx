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
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="mx-auto mb-5 flex w-2/5 flex-col rounded p-5 shadow-custom-shadow"
      >
        <label className="mb-5 flex justify-between">
          Email*:
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="ml-5 w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
          />
        </label>
        <label className="mb-5 flex justify-between">
          Password*:
          <input
            type="password"
            name="password"
            className="ml-5 w-3/4 rounded	 border border-black hover:border-violet-500 focus:outline-violet-500"
          />
        </label>
        <button
          type="submit"
          className="mx-auto rounded-xl bg-violet-300 px-3 py-1 hover:bg-violet-500 hover:text-white"
        >
          Log In
        </button>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  );
};
