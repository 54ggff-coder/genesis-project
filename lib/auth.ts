import { createBrowserClient } from "@supabase/ssr";

let client: ReturnType<typeof createBrowserClient> | null = null;
function getClient() {
  if (!client) {
    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return client;
}

export async function signIn(email: string, password: string) {
  return await getClient().auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string) {
  return await getClient().auth.signUp({ email, password });
}

export async function signOut() {
  return await getClient().auth.signOut();
}

export async function getCurrentUser() {
  const { data } = await getClient().auth.getUser();
  return data.user;
}
