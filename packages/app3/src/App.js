import React, { Suspense } from 'react';

const AppTest1 = React.lazy(() => import('app1/Test1'));
const AppTest2 = React.lazy(() => import('app2/Test2'));

const App = props => (
  <>
    <div>
      <h1 onClick={props.test}>App3</h1>
    </div>
    <Suspense fallback={'loading...'}>
      <AppTest1 />
      <AppTest2 />
    </Suspense>
  </>
);

export default App;
