import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import { useState } from "react";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Search order #"
        className="w-28 bg-background-color text-text-color placeholder:text-slate-400 focus:w-48 md:w-48 md:focus:w-64 lg:w-64 lg:focus:w-72"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
