type Props = {
  variant: "light" | "dark";
  setVariant: () => void;
};

const Header: React.FC<Props> = ({ variant, setVariant }) => {
  return (
    <header>
      <div>Current variant: {variant}</div>
      <button type="button" onClick={setVariant}>
        Toggle variant
      </button>
    </header>
  );
};

export default Header;
