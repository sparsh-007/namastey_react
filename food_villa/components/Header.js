const Title = () => {
  return (
    <a href="">
      <h1 id="title">Food Villa</h1>
    </a>
  );
};


const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;