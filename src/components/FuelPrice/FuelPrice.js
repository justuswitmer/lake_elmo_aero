import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import FuelPriceItem from "./FuelPriceItem";
import edit from "./images/edit.svg";

function FuelPrice(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row flex">
        <div className="col-sm">
          <img
            src={edit}
            alt="edit fuel prices"
            id="fuelIcon"
            width="20px"
            title="Edit Fuel Prices"
            onClick={handleShow}
          />
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Fuel Prices
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="text-center grid">
              {props.store.price.map((price, i) => (
                <FuelPriceItem key={price.id} price={price} />
              ))}
            </div>
          </div>
          <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(FuelPrice);
