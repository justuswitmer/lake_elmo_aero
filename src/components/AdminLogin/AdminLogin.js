import React from "react";

function AdminLogin() {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-4">
          <div>
            <h3 className="text-center">Admin Portal</h3>
          </div>
          <div className="flex">
            <form class="form-inline text-center">
              <div class="form-group mb-2">
                <p className="text-bold lead">Username</p>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="username"
                />
              </div>

              <div class="form-group mb-2">
                <p className="text-bold lead">Password</p>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="password"
                />
              </div>

              <button type="submit" class="btn btn-primary mb-2">
                Next
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
