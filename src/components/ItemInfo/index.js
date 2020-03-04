import React from "react";

import "./index.css";

const ItemInfo = ({ item, close }) => {
  return (
    <div className="item-info">
      <span className="close-info" onClick={close}>
        X
      </span>
      <div className="info-row">
        <span className="info-title">User:</span>
        <span className="info-text">{`${item.firstName} ${item.lastName}, `}</span>
        <span className="info-title">Email:</span>
        <span className="info-text">{`${item.email}, `}</span>
        <span className="info-title">Phone:</span>
        <span className="info-text">{`${item.phone}`}</span>
      </div>
      <div className="info-row">
        <span className="info-title">Address:</span>
        <span className="info-text">{`${item.address.state}, ${item.address.city}, ${item.address.streetAddress}, ${item.address.zip}`}</span>
      </div>
      <div className="info-row">
        <span className="info-title">Description:</span>
        <span className="info-text">{item.description}</span>
      </div>
    </div>
  );
};

export default ItemInfo;
