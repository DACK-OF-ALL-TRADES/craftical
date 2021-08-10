import { gql, useQuery } from "@apollo/client";
import React from "react";

export const filesQuery = gql`
  {
    files
  }
`;

export const Files = () => {
  // const { data, loading } = useQuery(filesQuery);
  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return (
    <div>
      {/* {
        data && data.files && (z
          // data.files.map((x) => (
          <img
            style={{ width: 200 }}
            key={data.files}
            src={`http://localhost:3001/images/${data.files}`}
            alt={data.files}
          />
        )
        // ))
      } */}
    </div>
  );
};
