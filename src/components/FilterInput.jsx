import { useRecoilState } from "recoil";
import { filterInput } from "../store/atom/filterInput";

export function FilterInput() {
  const [value, setValue] = useRecoilState(filterInput);
  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
