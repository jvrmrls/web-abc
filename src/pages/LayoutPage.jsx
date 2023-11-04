import DynamicImport from '#/utils/DynamicImport.jsx';

const LayoutPage = () => {
  const HomePage = () => (
    <DynamicImport load={() => import('#/pages/HomePage.jsx')}>
      {Component => (Component === null ? <></> : <Component />)}
    </DynamicImport>
  );

  return (
    <>
      <main style={style.main}>
        <HomePage />
      </main>
    </>
  );
};

const style = {
  main: {}
};

export default LayoutPage;
