import * as React from 'react';
import './style.css';
import ResponsiveAppBar from './component/ResponsiveAppBar';
import SideBar from './component/SideBar';
import Footer from './component/Footer';
import Main from './component/Main';
function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SideBar />
      <Footer />
    </div>
  );
}
export default App;
