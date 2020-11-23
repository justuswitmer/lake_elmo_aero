import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';
import FuelPriceItem from './FuelPriceItem';

function FuelPrice(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className="row flex">
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
          >
            Edit Fuel Prices
          </button>
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Fuel Prices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="text-center grid">
              {props.store.price.map(price =>
                <FuelPriceItem
                  key={price.id}
                  price={price}
                />
              )}
            </div>
          </div>
          <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(FuelPrice);
