import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-everglades-84721.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleUpdateStatus = id => {
    const url = `https://peaceful-everglades-84721.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data=> {
      if(data.modifiedCount > 0){
        alert("Successfiully updated status")
      }
    })
  }

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://peaceful-everglades-84721.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <div className="bradcam-area bradcam-bg-4  mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam-text text-center">
                  <h3>Manage All Orders</h3>
                  <p>Pixel perfect design with awesome contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Destination</th>
                <th scope="col">Journey Date</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.destination}</td>
                  <td>{order.journeyDate}</td>
                  <td>
                    { order.status === 'Pending' ? <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-primary">{order.status}</button> : <button className="btn btn-success">{order.status}</button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
