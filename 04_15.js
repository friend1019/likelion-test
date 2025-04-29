const descriptionPara = document.getElementById('description');
const changeTextButton = document.getElementById('changeTextBtn');

changeTextButton.addEventListener ('click', () => {
    descriptionPara.textContent = 'hello';
});

const fetchDataButton = document.getElementById('fetchDataBtn');
const fetchedDataPara = document.getElementById('fetchedData');

fetchDataButton.addEventListener('click', () => {


  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      fetchedDataPara.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('Fetch Error:', error);
      fetchedDataPara.textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
    });
});


async function fetchData() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('async/await data');
    }
    catch (error) {
        console.error('error');
    }
}