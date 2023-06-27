export default function SearchBar({ handleSearch }) {
  return (
    <>
      <input
        className="mx-6 mb-2 rounded-lg border-zinc-400 focus:border-blue-700 transition-all duration-250 ease-in-out focus:scale-110 "
        type="text"
        placeholder="Search by Name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
}
