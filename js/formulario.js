
//¨**********************TABLA***********************
const tabla =document.getElementById("tabla")

async function usuarixs(){
  const users = await fetch ("./js/users.json");
  const parseUsers = await users.json();
  console.log(parseUsers)
  return parseUsers
 
};
usuarixs();

usuarixs().then(users =>{ 
  users.forEach((users, puestos) => {
    tabla.innerHTML += `
        <tr>
         <th scope="row">${puestos + 1}  </th>
           <td>${users.nombre} </td>
           <td>${users.score} </td>
           <td>${users.pais} </td>
        </tr>`
  
    }
      
    )}
  );
  


