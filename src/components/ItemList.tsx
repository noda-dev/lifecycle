import React from 'react';
import { NONAME } from 'dns';
import CSS from 'csstype';

type Props = {
  items: string
}

const ItemList = (props: Props) => {
  const ulStyle: CSS.Properties = {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }

  const liStyle: CSS.Properties = {
    boxSizing: 'border-box',
    border: '1px solid #000',
    width: '500px',
    padding: '5px 0'
  }

  const itemList: string[] = props.items.split(',');
  const listDom = itemList.map((item, index) => {
    return (
      <li style={liStyle} key={index}>
        {item}
      </li>
    )
  })

  return (
    <div>
      <ul style={ulStyle}>
        {listDom}
      </ul>
    </div>
  );
}

export default ItemList;