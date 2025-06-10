// // const createTodo = async (todo) =>{
// //     let options = {
// //         method: "POST",
// //         headers: {
// //             "Content-type": "application/json"
// //         },
// //         body: JSON.stringify(todo),
// //     }
// //     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
// //     let response = await p.json()
// //     return response
// // }

// // const mainFunc = async () => {
// //     let todo = {
// //             title: 'Harry',
// //             body: 'bhai',
// //             userId: 1100,
// //         }
// //         let todor = await createTodo(todo)
// //     console.log(todor);  
// // }   

// // mainFunc()


// async function postData() {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const payload = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//       },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('POST response data:', data);
//   } catch (err) {
//     console.error('Fetch error:', err);
//   }
// }

// postData();





async function postData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const payload = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(payload)
    });


    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    const data = await response.json();
    
    console.log('POST response data:', data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

postData();



