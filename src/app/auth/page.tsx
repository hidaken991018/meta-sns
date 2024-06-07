// app/auth/page.tsx
import { withAuthenticator } from '@aws-amplify/ui-react';

function AuthPage() {
  return (
    <div>
      <h1>ログイン</h1>
    </div>
  );
}

export default withAuthenticator(AuthPage);
