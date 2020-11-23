import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminItem from './AdminItem';

class Admin extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_APPOINTMENT' });
  }

  render() {
    return (
      <div className="step-one">
        <section className="container">
          <div className="text-center m-5">
            <h3>Open Requests</h3>
          </div>
          <div className="card my-4 text-bold">
            <div className="row lead table-head">
              <div className="col-sm text-bold">Service Date</div>
              <div className="col-sm text-bold">Tail Number</div>
              <div className="col-sm text-bold">Service Type</div>
              <div className="col-sm text-bold">Details</div>
            </div>
            {this.props.store.appointment.map(appointment =>
              <AdminItem
                key={appointment.id}
                appointment={appointment}
              />
            )}
          </div>
          <button type="submit" className="btn btn-outline my-3">
            Service History
          </button>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
