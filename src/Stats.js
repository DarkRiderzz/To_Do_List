function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Add some Task to Do in you list</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percnetageItem = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percnetageItem === 100
          ? "You have finished all the task"
          : `You have ${numItems} Task in your list, and you already Done
          ${numPacked} (${percnetageItem}%)`}
      </em>
    </footer>
  );
}

export default Stats;
