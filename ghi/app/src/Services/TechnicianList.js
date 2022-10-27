import React, { useState, useEffect } from "react";

const TechnicianList = () => {
  const [technician, setTechnician] = useState([]);

  const url = "http://localhost:8080/api/technicians/";

  const fetchTechnician = async () => {
    try {
      const response = await fetch(url);
      const content = await response.json();
      if (response.ok) {
        setTechnician(content.technicians);
        console.log(content);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchTechnician();
  }, []);

  const deletedTechnician = async (id) => {
    fetch(`http://localhost:8080/api/technicians/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="container-fluid">
      <h1>Technicians</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Number</th>
          </tr>
        </thead>
        <tbody>
          {console.log("technician before map: ", technician)}
          {technician.map((technician) => (
            <tr key={technician.id}>
              <td>{technician.name}</td>
              <td>{technician.employee_number}</td>
              <td>
                <button
                  onClick={() => deletedTechnician(technician.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="http://localhost:3000/service/new_technician">
        <button className="btn btn-success"> Create Technician</button>
      </a>
    </div>
  );
};

export default TechnicianList;