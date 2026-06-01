import DynamicImport from '#/utils/DynamicImport.jsx';

function App() {
  const LayoutPage = () => (
    <DynamicImport load={() => import('#/pages/LayoutPage.jsx')}>
      {Component => (Component === null ? <></> : <Component />)}
    </DynamicImport>
  );
  return (
    <>
      <LayoutPage />
    </>
  );
}

export default App;
