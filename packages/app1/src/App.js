import React, { Suspense, useState } from 'react';

let BB = '';

const RemoteApp = React.lazy(() => import('app2/Test2'));

const App = () => {
  const [visible, setVisible] = useState(false);

  if (visible) {
    setTimeout(() => {
      BB = React.lazy(() => import('app2/Test2'));
    }, 1000);
  }
  console.log(BB, 'aaa');
  const test = () => {
    console.log(1111);
    setVisible(!visible);
  };
  return (
    <div>
      <div>
        <h1 onClick={() => test()}>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>{visible && BB && <BB />}</Suspense>
    </div>
  );
};

export default App;
