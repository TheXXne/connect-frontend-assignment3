import { SearchIcon } from "@closet-design-system/core-connect";

export default function SearchBox() {
  return (
    <div>
      <div>
        <input placeholder="Search by NFTs" />
        <div>
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
