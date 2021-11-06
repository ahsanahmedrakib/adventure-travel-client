import React, { useRef } from "react";

const AddDestination = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const addNewDestination = (e) => {
    e.preventDefault();
    const image = imageRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;

    const newDestination = { image, name, description, price }

    fetch('https://peaceful-everglades-84721.herokuapp.com/addDestination', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert("Destination added successfully")
            e.target.reset();
        }
    })

  };

  return (
    <div>
      <div className="bradcam-area bradcam-bg-4  mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam-text text-center">
                <h3>Add Destination</h3>
                <p>Pixel perfect design with awesome contents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="col-md-8 col-lg-8 m-auto text-start">
          <form onSubmit={addNewDestination}>
            <div className="form-group">
              <label htmlFor="name" className="form-label text-primary mt-2">
                Destination name
              </label>
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Detination name"
                ref={nameRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc" className="form-label text-primary mt-2">
                Description
              </label>
              <textarea
                className="form-control"
                name=""
                id="desc"
                cols="30"
                rows="5"
                placeholder="Description"
                ref={descriptionRef}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="price" className="form-label text-primary mt-2">
                Price
              </label>
              <input
                id="price"
                className="form-control"
                type="text"
                placeholder="Price"
                ref={priceRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="form-label text-primary mt-2">
                Image url link
              </label>
              <input
                id="image"
                className="form-control"
                type="text"
                placeholder="URL of image"
                ref={imageRef}
                required
              />
            </div>
            <button className="btn btn-primary mt-3">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;
