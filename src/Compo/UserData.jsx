import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => {
        const { id, title, price ,description,category,image,sold,dateOfSale } = curUser; // Assuming these properties exist in each user/item object

        return (
          <tr key={index}>
                        <td>{id}</td>

            <td>{title}</td>
            <td>{price}</td>
            <td>{description}</td>

            <td>{category}</td>
            <td>{image}</td>
            <td>{sold}</td>
            <td>{dateOfSale}</td> 

          </tr>
        );
      })}
    </>
  );
};

export default UserData;
