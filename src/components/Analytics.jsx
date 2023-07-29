import React from "react";
import Laptop from "../assets/laptop.jpg";

export function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Managing data analytics centrally is crucial for organizations to
            ensure efficient data processing, analysis, and decision-making.
            <p>Benefits of Centralized Data Analytics:</p>
            Streamlined Data Governance: Centralization allows for better
            control over data access, security, and compliance, reducing the
            risk of data breaches and misuse.<p>Improved Data Quality:</p>  Centralized
            data facilitates data cleansing and normalization, leading to more
            accurate and reliable insights. <p>Enhanced Collaboration:</p> 
            Centralization fosters collaboration among various teams and
            departments, enabling them to share data, knowledge, and expertise
            more effectively. <p>Efficient Resource Utilization:</p>  With a centralized
            approach, organizations can optimize hardware, software, and
            personnel resources for analytics tasks.
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md my-6 mx-auto
          md:mx-0 py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
