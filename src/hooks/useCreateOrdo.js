import Input from "../components/elements/Input";

function useCreateOrdo(row, col) {
  const grid = Array.from({ length: row }, (_, rowIndex) => (
    <div key={rowIndex} className="flex px-1">
      {Array.from({ length: col }, (_, colIndex) => (
        <Input key={colIndex} defaultValue={0} />
      ))}
    </div>
  ));

  return grid;
}
export default useCreateOrdo;
