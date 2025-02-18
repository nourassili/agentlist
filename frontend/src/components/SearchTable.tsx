export const SearchTable = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="border-2 w-[1000px] rounded-xl mt-10 mb-2 p-2"
        type="text"
        id="searchTable"
        placeholder="Search for agents..."
      />
    </div>
  );
};
