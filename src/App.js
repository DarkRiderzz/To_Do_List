import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState(function () {
    const storedValue = localStorage.getItem("items");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  //Bonus task, saving task to local storage
  useEffect(
    function () {
      localStorage.setItem("items", JSON.stringify(items));
    },
    [items]
  );

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //bonus Task, to mark the task that we have done
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearHadler() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />

      <TaskInput onAddItems={handleItems} />

      <TaskList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        clearHadler={clearHadler}
      />

      {/* Aditional */}
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> To Do List</h1>;
}
