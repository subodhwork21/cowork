interface btn {
  content: string;
  bgcolor: string;
  weight?: string;
  size?: string;
}

const Button = ({
  content,
  bgcolor,
  weight = "font-light",
  size = "normal",
}: btn) => {
  return (
    <>
      <button
        className={`${bgcolor} rounded-[42px] text-sm ${weight} ${
          size === "normal" ? "px-5 py-3" : "px-8 py-4"
        } ${
          bgcolor === "bg-black" ? "text-white" : "text-black outline outline-1"
        }`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
