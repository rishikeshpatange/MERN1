import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const {services} = useAuth();

  return (
    <div className="p-4">
      <h1>service</h1>
      <div>
        {services.map((curElem, index)=> {
          // const {service, description} = curElem

          return ( <div key={index}>
            <p>No. {index + 1}</p>
            <h2>{curElem.service}</h2>
            <p>{curElem.description}</p>
            <p>{curElem.price}</p>
            <p>{curElem.provider}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Service