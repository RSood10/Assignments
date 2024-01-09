import { useState } from "react";

export default function UserValue() {
  return (
    <div className="uservalue">
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value, "", "");
          setName(e.target.value);
        }}
        placeholder="Enter Your name"
      />
      <input
        type="text"
        onChange={(e) => {
          setData("", e.target.value, "");

          setDesc(e.target.value);
        }}
        placeholder="Enter Description"
      />
      <input
        type="text"
        onChange={(e) => {
          setData("", "", e.target.value);

          setInterest(e.target.value);
        }}
        placeholder="Enter Interests"
      />
    </div>
  );
}
