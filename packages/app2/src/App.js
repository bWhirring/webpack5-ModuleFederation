import React, { Suspense } from 'react';

const AppTest1 = React.lazy(() => import('app1/Test1'));

const App = props => (
  <>
    <div>
      <h1 onClick={props.test}>App2</h1>
    </div>
    <Suspense fallback={'loading...'}>
      <AppTest1 name="asdas" />
    </Suspense>
  </>
);

export default App;
