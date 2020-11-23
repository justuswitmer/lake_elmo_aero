import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';


function FuelPriceItem(props) {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('in useEffect in fuelprice', props.store.price);
  //   dispatch({
  //     type: 'SAVE_PRICE_FOR_DB',
  //     payload: props.store.price
  //   })
  // }, [])

  const handleChange = (property, event) => {
    console.log('here is my property', property);
    console.log('here is my event.target.value', event.target.value);
    dispatch({
      type: 'SAVE_PRICE_FOR_DB',
      payload: {
        [property]: event.target.value
      }
    })
  }

  const handleSubmit = () => {
    console.log('here is my price ready to go to the db', props.store.savePrice);
    dispatch({
      type: 'UPDATE_PRICE',
      url: `price/${props.price.id}`,
      payload: props.store.savePrice
    });
  }


  return (
    <section className="m-1">
      <p className="lead text-bold">{props.price.type}</p>
      <p className="sm">Current Price: {props.price.pricePerGal}/gal</p>
      <input
        className="sm"
        type='number'
        placeholder='new price/gal'
        onChange={(event) => handleChange('pricePerGal', event)}
      />
      <button
        className="sm"
        onClick={handleSubmit}
      >Change Price
                  </button>
    </section>
  );
}

export default connect(mapStoreToProps)(FuelPriceItem);