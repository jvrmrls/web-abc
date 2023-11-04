import { Outlet } from 'react-router-dom';
// import TopBarContainer from '#/components/shared/topbar/TopBarContainer.jsx';
// import FooterComponent from '#/components/shared/bottombar/FooterComponent.jsx';

const LayoutPage = () => {
  return (
    <>
      {/* <header>
        <TopBarContainer />
      </header> */}
      <main style={style.main}>
        <Outlet />
      </main>
      {/* <footer>
        <FooterComponent />
      </footer> */}
    </>
  );
};

const style = {
  main: {
    // marginTop: '70px',
    // marginBottom: '60px'
  }
};

export default LayoutPage;
