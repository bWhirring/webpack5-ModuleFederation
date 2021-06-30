import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/Test2'));

const App = () => (
  <div>
    <div>
      <h1>App1</h1>
    </div>
    <Suspense fallback={'loading...'}>
      <RemoteApp />
    </Suspense>
  </div>
);

export default App;
