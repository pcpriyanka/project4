import React, { useEffect, useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
      });
  });

  return (
    <>
      <h1>Comment List</h1>

      <table className="table table-bordered">
        {comments.map((comment) => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
