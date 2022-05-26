const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_container">
        <div>
          <p className="footer_message">
            Made with <span className="footer_message_emoji">❤️</span> by{" "}
            <a
              href="https://twitter.com/_slingercode"
              rel="noreferrer"
              target="_blank"
            >
              @_slingercode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
