interface btn {
  content: string;
  bgcolor: string;
  weight?: string;
}

const button = ({ content, bgcolor, weight = "font-light" }: btn) => {
  return (
    <>
      <button
        className={`${bgcolor} rounded-[42px] px-4 py-2 text-sm ${weight} ${
          bgcolor === "bg-black" ? "text-white" : "text-black outline outline-1"
        }`}
      >
        {content}
      </button>
    </>
  );
};

export default button;
