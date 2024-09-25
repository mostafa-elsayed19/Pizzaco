import Input from "../../ui/Input";

function SearchOrder() {
  return (
    <Input
      type="search"
      placeholder="Search order #"
      className="w-28 bg-background-color placeholder:text-slate-400 focus:w-48 md:w-48 md:focus:w-64 lg:w-64 lg:focus:w-72"
    />
  );
}

export default SearchOrder;
