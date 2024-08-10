export type AuthType = {
  token: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
};
