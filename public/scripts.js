async function getData() {
  const diningRequest = await fetch('/api/dining');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  console.log('window loaded');
  const tbody = document.querySelector('.tbody');
  const data = await getData();
  console.log(data.data);
  data.data.forEach((item) => {
    const html = data.data.map((hall) => (`
        <tr>
        <td class="hall_id">${hall.hall_id}</td>
        <td class="hall_name">${hall.hall_name}</td>
        <td class="hall_address">${hall.hall_address}</td>
        </tr>
        `));
    tbody.innerHTML = html.join(' ');
    console.log(tbody);
  });
}

window.onload = windowActions;