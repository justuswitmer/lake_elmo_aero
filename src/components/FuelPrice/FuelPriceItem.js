import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';


function FuelPriceItem(props) {
  const [fuelPrice, setFuelPrice] = useState(props.price.pricePerGal);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log('here is my price ready to go to the db', fuelPrice);
    dispatch({
      type: "UPDATE_PRICE",
      url: `price/${props.price.id}`,
      payload: { newPrice: fuelPrice }
    });
  }

  return (
    <section className="m-1">
      <p className="lead text-bold">{props.price.type}</p>
      <p className="sm">Current Price: {props.price.pricePerGal}/gal</p>
      <input
        className="sm"
        type='money'
        placeholder='new price/gal'
        value={fuelPrice}
        onChange={(event) => setFuelPrice(event.target.value)}
      />
      <button
        className="sm"
        onClick={handleSubmit}
      >Change {props.price.type} Price
                  </button>
    </section>
  );
}

export default connect(mapStoreToProps)(FuelPriceItem);
