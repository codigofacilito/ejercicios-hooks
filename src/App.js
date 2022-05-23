import './App.css';

import ViewOne from './views/ViewOne';
import ViewTwo from './views/ViewTwo';
// import Counter from './views/Counter';
// import CounterTwo from './views/CounterTwo';
import AnalyticsPageOne from './views/AnalyticsPageOne';
import AnalyticsPageTwo from './views/AnalyticsPageTwo';
import AnalyticsPageThree from './views/AnalyticsPageThree';

function App() {
  return (
    <div className="App">
      <h1>Repaso Hooks</h1>
      <AnalyticsPageOne />
      <AnalyticsPageTwo />
      <AnalyticsPageThree />
    </div>
  );
}

export default App;
