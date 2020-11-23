import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminItem from './AdminItem';
import FuelPrice from '../FuelPrice/FuelPrice';

class Admin extends Component {
  state = {
    isOpen: false
  }

  componentDidMount = () => {
    this.fetchAppointments();
    console.log('this is the fuel price reducer', this.props.store);
  }

  fetchAppointments = () => {
    this.props.dispatch({ type: 'FETCH_APPOINTMENT' });
    console.log(this.state.isOpen);


  }

  setRequestState = () => {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="step-one">
        <section className="container">
          <FuelPrice />
          <div className="text-center m-5">
            <h3>
              {this.state.isOpen === false ?
                <span>Open Requests</span>
                :
                <span>Service History</span>
              }
            </h3>
          </div>
          <div className="card my-4 text-bold">
            <div className="row lead table-head">
              <div className="col-sm text-bold">Service Date</div>
              <div className="col-sm text-bold">Tail Number</div>
              <div className="col-sm text-bold">Service Type</div>
              <div className="col-sm text-bold">Details
              </div>
            </div>
            {this.props.store.appointment.map(appointment => {
              if (appointment.is_completed === this.state.isOpen) {
                return (
                  <AdminItem
                    key={appointment.id}
                    appointment={appointment}
                  />)
              }
            }
            )}
          </div>

          <button
            type="submit"
            className="btn btn-outline my-3"
            onClick={this.setRequestState}
          >
            {this.state.isOpen === false ?
              <span>Service History</span>
              :
              <span>Open Requests</span>
            }
          </button>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
