import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AdminItem from "./AdminItem";
import LogOutButton from "../LogOutButton/LogOutButton";
import FuelPrice from "../FuelPrice/FuelPrice";

//Style Imports
import { Table } from "react-bootstrap";

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
      <div className="">
        <section className="container align-center">
          <div className="flex">
            <FuelPrice />
            <button
              type="submit"
              className="btn"
              onClick={this.setRequestState}
            >
              {this.state.isOpen === false ? (
                <span>Service History</span>
              ) : (
                  <span>Open Requests</span>
                )}
            </button>
            <LogOutButton className="btn" />
          </div>
          <div className="text-center m-5">
            <h3>
              {this.state.isOpen === false ? (
                <span>Open Requests</span>
              ) : (
                  <span>Service History</span>
                )}
            </h3>
          </div>
          <section className="container-fluid">
            <Table className="table">
              <div className="text-bold">
                <thead className="">
                  <tr className="d-flex">
                    <th className="col-7 text-bold">Service Date</th>
                    <th className="col-7 text-bold">Tail Number</th>
                    <th className="col-7 text-bold">Service Type</th>
                    <th className="col-7 text-bold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.store.appointment.map((appointment) => {
                    if (appointment.is_completed === this.state.isOpen) {
                      return (
                        <tr className="d-flex my-2">
                          <AdminItem
                            key={appointment.id}
                            appointment={appointment}
                          />
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </div>
            </Table>
          </section>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);
