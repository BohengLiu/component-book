import React from "react";

interface VLProps<T> extends React.HTMLAttributes<HTMLUListElement> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

class VirtualList<T> extends React.Component<VLProps<T>, {}> {
  render() {
    const { data, renderItem } = this.props;
    return (
      <ul>
        {data.map((item) => (
          <li>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
}

export default VirtualList;
