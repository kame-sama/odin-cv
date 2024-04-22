import logo from '/logo.png';

function MainHeader() {
  return (
    <div className="main-header">
      <img src={logo} alt="logo" className="main-logo" />
      <div className="main-title">
        <div>CV</div>
        <div>app</div>
      </div>
    </div>
  );
}

export default MainHeader;
