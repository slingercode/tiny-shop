const Header: React.FC = ({ children }) => {
  return (
    <header>
      <div className="header_container">
        <div>
          <h1 className="header_title">{children}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
