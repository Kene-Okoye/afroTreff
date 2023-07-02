import './App.css';

import ComponentsPreview from '@/components/ComponentsPreview';
import TheHeader from '@/components/header/TheHeader';

function App() {
  return (
    <>
      <TheHeader />
      <main id="main-content" className="inert-target">
        <ComponentsPreview />
      </main>
      <footer>
        <p>Halloo</p>
        <button className="inert-target">footer button</button>
      </footer>
    </>
  );
}

export default App;
