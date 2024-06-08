"use client"
// app/auth/page.tsx
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

type Props = {
  signOut: () => void;
  user: any;
}

function AuthPage(
  // { signOut, user }
) {
  return (
    <Authenticator >
      {/* <div>
        <h1>Welcome, {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </div> */}
    </Authenticator>
  );
}

export default AuthPage;
