import { useState } from "react";
function TaskList({ items, onDeleteItem, onToggleItem, clearHadler }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  //localeCompar is used to compare two string in current local
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  //we can not use items.sort() as sort will mutate the array and slice make the copy of array the we sort it

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={clearHadler}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.packed ? "textD" : ""}>{item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      {/* onDeleteItem(item.id) will imediate call the function so we use ()=>onDeleteItem(item.id) */}
    </li>
  );
}

export default TaskList;
