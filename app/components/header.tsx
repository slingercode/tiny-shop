const Header: React.FC = ({ children }) => {
  return (
    <header>
      <div className="header_container">
        <div>
          <h2 className="header_title">{children}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
