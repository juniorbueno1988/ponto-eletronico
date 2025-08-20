const Header = () => {
  // SVG da bandeira do Brasil
  const brazilFlagSvg = (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#009C3B"/>
      <rect x="4" y="2" width="16" height="12" fill="#FEDF00"/>
      <circle cx="12" cy="8" r="5" fill="#FFFFFF"/>
      <path d="M12 8L9.5 6L10.5 9L8 10.5L11 10.5L12 13L13 10.5L16 10.5L13.5 9L14.5 6L12 8Z" fill="#002776"/>
    </svg>
  );

  return (
    <header className="header">
      <span className="user-name">EDILSON JOSE BUENO JUNIOR</span>
      {brazilFlagSvg}
    </header>
  );
};

export default Header;