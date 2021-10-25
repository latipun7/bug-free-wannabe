const a = process.env.NODE_ENV;

const b: NodeJS.ProcessEnv = {
  /* ctrl-space, auto-completion works here */
};

const c: keyof NodeJS.ProcessEnv =
  " /* ctrl-space, no auto-completion here */ ";

export { a, b, c };
