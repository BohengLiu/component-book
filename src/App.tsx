import React from "react";
import VirtualList from "./components/virtual-list";

class MyList extends VirtualList<string> {}

function App() {
  const data = ["1", "2", "3"];
  const renderItem = (item: string) => item;
  return (
    <div className="App">
      <MyList data={data} renderItem={renderItem} />
    </div>
  );
}

export default App;
