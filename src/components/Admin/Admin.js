import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AdminItem from "./AdminItem";
import LogOutButton from "../LogOutButton/LogOutButton";
import FuelPrice from "../FuelPrice/FuelPrice";

//Style Imports
import { Table } from "react-bootstrap";
import "./Admin.css";

class Admin extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount = () => {
    this.fetchAppointments();
  };

  fetchAppointments = () => {
    this.props.dispatch({ type: "FETCH_APPOINTMENT" });
    console.log(this.state.isOpen);
  };

  setRequestState = () => {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="adminView">
        <section className="container align-center">
          <h2 id="adminH2">Admin Dashboard</h2>
          <div className="text-center m-4 ">
            <h3>
              {this.state.isOpen === false ? (
                <span>Open Requests</span>
              ) : (
                  <span>Service History</span>
                )}
            </h3>

          </div>
          <div className="adminSwitchDiv">
            {this.state.isOpen === false ? (
              <span>View Service History</span>
            ) : (
                <span>View Open Requests</span>
              )}
            <label
              className="switch"
            >
              <input type="checkbox" onClick={this.setRequestState} />
              <span className="slider round"></span>
            </label>
          </div>
          <section>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-bold">Service Date</th>
                    <th className="text-bold">Tail Number</th>
                    <th className="text-bold">Service Type</th>
                    <th className="text-bold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.store.appointment.map((appointment) => {
                    if (appointment.is_completed === this.state.isOpen) {
                      return (
                        <tr>
                          <AdminItem
                            key={appointment.id}
                            appointment={appointment}
                          />
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
