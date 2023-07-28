import { useState, useEffect } from "react";

// const ItemList = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };

export default function ItemList() {
  const [file, setFile] = useState()

  useEffect(()=> {
    fetch("http://127.0.0.1:5002/getAllItem/64bffeeea611ff5ddf5f5304" ) // get info
    .then(res => res.json()) 
    .then(info => {
      console.log(info)
      setFile(info)
      }) // set file
    .catch(err => alert(err))
}, [])}

