import React from "react";
import Courses from "./Courses.JSX";

function NestedLoop() {
  const uni = [
    {
      uniName: "Iqbal University",
      city: "Karachi",
      email: "iqbal@ymail.com",
      courses: [
        {
          courseName: "BSCS",
          duration: "4 Years",
          semFee: "Rs. 75000/-",
        },
        {
          courseName: "MBA",
          duration: "3 Years",
          semFee: "Rs. 65000/-",
        },
        {
          courseName: "MIT",
          duration: "5 Years",
          semFee: "Rs. 95000/-",
        },
      ],
    },
    {
      uniName: "Rumi University",
      city: "Lahore",
      email: "rumi@ymail.com",
      courses: [
        {
          courseName: "BSCS",
          duration: "4 Years",
          semFee: "Rs. 75000/-",
        },
        {
          courseName: "MBA",
          duration: "3 Years",
          semFee: "Rs. 65000/-",
        },
        {
          courseName: "MIT",
          duration: "5 Years",
          semFee: "Rs. 95000/-",
        },
      ],
    },
    {
      uniName: "Next University",
      city: "Quetta",
      email: "next@ymail.com",
      courses: [
        {
          courseName: "BSCS",
          duration: "4 Years",
          semFee: "Rs. 75000/-",
        },
        {
          courseName: "MBA",
          duration: "3 Years",
          semFee: "Rs. 65000/-",
        },
        {
          courseName: "MIT",
          duration: "5 Years",
          semFee: "Rs. 95000/-",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>List of Universities</h1>
      {uni.map((uni, index) => (
        <div
          key={index}
          style={{
            width: "600px",
            backgroundColor: "grey",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "12px",
            borderBottom: "8px solid lightsalmon",
          }}
        >
          <h2>
            Name:{" "}
            <span style={{ fontWeight: "lighter", color: "lightsalmon" }}>
              {uni.uniName}
            </span>
          </h2>
          <h2>
            City:{" "}
            <span style={{ fontWeight: "lighter", color: "lightsalmon" }}>
              {uni.city}
            </span>{" "}
          </h2>
          <h2>
            Email:{" "}
            <span style={{ fontWeight: "lighter", color: "lightsalmon" }}>
              {uni.email}
            </span>
          </h2>
          <h3>COURSES OFFERED:</h3>
          <Courses courses={uni.courses} />
        </div>
      ))}
    </div>
  );
}

export default NestedLoop;
