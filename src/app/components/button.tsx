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
        className={`${bgcolor} rounded-[42px] px-4 py-2 text-sm ${weight} ${
          size === "normal" ? "px-4 py-2" : "px-10 py-4"
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
