// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // props: Props
  // items = [];
  // const message = items.length === 0 ? <p>No item found</p> : null
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };
  //   const handleClick = (event: MouseEvent) => console.log(event);
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {
        getMessage()
        //   message
        /* {items.length === 0 ? <p>No item found</p> : null} */
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={
              () => {
                setSelectedIndex(index);
                onSelectItem(item);
              }
              // handleClick
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment >
  );
}

export default ListGroup;
