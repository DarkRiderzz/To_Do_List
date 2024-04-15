import { useState } from "react";
function TaskInput({ onAddItems }) {
  const [description, setDescription] = useState("");

  // e.preventDefault is used because we dont want to reload it as we can build single page application
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What You have to Do?</h3>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskInput;
