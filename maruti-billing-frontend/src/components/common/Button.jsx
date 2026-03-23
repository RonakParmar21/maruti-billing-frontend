const Button = ({
  text = "Click",
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#0000ff] text-white px-4 py-2 rounded-lg hover:bg-[#0000ffff] hover:cursor-pointer transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
