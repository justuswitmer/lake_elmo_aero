import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';

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
              <section className="m-1">
                <p className="lead text-bold">100LL</p>
                {props.store.price.map(price =>
                  <p className="sm">Current Price: {price.fuel_100L} /gal</p>
                )}
              </section>
              <section className="m-1">
                <p className="lead text-bold">Jet A</p>
                <p className="sm">Current Price: /gal</p>
              </section>
            </div>
          </div>
          <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(FuelPrice);
