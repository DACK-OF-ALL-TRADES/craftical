import { gql, useQuery } from "@apollo/client";
import React from "react";

export const filesQuery = gql`
  {
    files
  }
`;

export const Files = () => {
  const { data, loading } = useQuery(filesQuery);
  console.log("------->" + data);
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data &&
        data.files.map((x) => (
          <img
            style={{ width: 200 }}
            key={x}
            src={`http://localhost:3001/images/${x}`}
            alt={x}
          />
        ))}
    </div>
  );
};
