// src/OfficeList.js
import React from "react";

const OfficeList = () => {
  const offices = [
  {
    name: "Alpha Workspace",
    rent: 55000,
    address: "Anna Nagar, Chennai",
    image: "https://via.placeholder.com/300x180?text=Office+1"
  },
  {
    name: "Beta Hub",
    rent: 72000,
    address: "T Nagar, Chennai",
    image: "https://via.placeholder.com/300x180?text=Office+2"
  },
  {
    name: "Gamma Tower",
    rent: 60000,
    address: "Velachery, Chennai",
    image: "https://via.placeholder.com/300x180?text=Office+3"
  },
  {
    name: "Delta Space",
    rent: 45000,
    address: "Tambaram, Chennai",
    image: "https://via.placeholder.com/300x180?text=Office+4"
  }
];
  return (
    <div>
      <h1>Office Space Rental App</h1>
      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            maxWidth: "300px"
          }}
        >
          <img src={office.image} alt={office.name} width="100%" />
          <h3>{office.name}</h3>
          <p>{office.address}</p>
          <p
            style={{
              color: office.rent > 60000 ? "green" : "red",
              fontWeight: "bold"
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
