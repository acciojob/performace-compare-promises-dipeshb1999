// Array of API URLs
const apiUrls = [
  'https://api.example.com/api1',
  'https://api.example.com/api2',
  'https://api.example.com/api3',
  // Add more API URLs as needed
];

// Function to fetch data from an API URL and measure the time taken
async function fetchData(apiUrl) {
  const startTime = new Date().getTime();
  const response = await fetch(apiUrl);
  const endTime = new Date().getTime();
  const timeTaken = endTime - startTime;
  return { apiUrl, timeTaken };
}

// Function to display the results of Promise.all and Promise.any on the webpage
async function displayResults() {
  const promisesAll = apiUrls.map(fetchData);
  const promisesAny = apiUrls.map(fetchData);

  // Measure the time taken for Promise.all
  const startTimeAll = new Date().getTime();
  const resultsAll = await Promise.all(promisesAll);
  const endTimeAll = new Date().getTime();
  const timeTakenAll = endTimeAll - startTimeAll;

  // Measure the time taken for Promise.any
  const startTimeAny = new Date().getTime();
  const resultsAny = await Promise.any(promisesAny);
  const endTimeAny = new Date().getTime();
  const timeTakenAny = endTimeAny - startTimeAny;

  // Display the results of Promise.all on the webpage
  const outputAll = document.getElementById('output-all');
  resultsAll.forEach(result => {
    const row = document.createElement('tr');
    const apiUrlCell = document.createElement('td');
    const timeTakenCell = document.createElement('td');
    apiUrlCell.textContent = result.apiUrl;
    timeTakenCell.textContent = result.timeTaken;
    row.appendChild(apiUrlCell);
    row.appendChild(timeTakenCell);
    outputAll.appendChild(row);
  });

  // Display the results of Promise.any on the webpage
  const outputAny = document.getElementById('output-any');
  const row = document.createElement('tr');
  const apiUrlCell = document.createElement('td');
  const timeTakenCell = document.createElement('td');
  apiUrlCell.textContent = resultsAny.apiUrl;
  timeTakenCell.textContent = resultsAny.timeTaken;
  row.appendChild(apiUrlCell);
  row.appendChild(timeTakenCell);
  outputAny.appendChild(row);

  // Display the total time taken for Promise.all and Promise.any
  console.log('Time taken for Promise.all:', timeTakenAll);
  console.log('Time taken for Promise.any:', timeTakenAny);
}

// Call the displayResults function when the page is loaded
window.onload = displayResults;
