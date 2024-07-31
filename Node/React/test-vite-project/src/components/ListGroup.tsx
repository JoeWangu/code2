// import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void
}

const ListGroup = ({items, heading, onSelectItem}: Props) => {
  const message = items.length === 0 && <p>No items found</p>;
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    // <Fragment>
    <>
      <h1>{ heading }</h1>
      {message}
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={
            selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
};

export default ListGroup;
