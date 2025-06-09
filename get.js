async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const data = await response.json();
    console.log('GET response data:', data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

getData();
