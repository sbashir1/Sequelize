function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getData() {
  const MealsMacrosRequest = await fetch('/api/MealsMacros');
  const MealsMacrosData = await MealsMacrosRequest.json();
  console.log(MealsMacrosData);
  return MealsMacrosData;
}

async function windowActions() {
  console.log('window loaded');
  const tbody = document.querySelector('.tbody');
  const data = await getData();
  console.log(data);
  data.forEach((array) => {
    console.log(Array(array));
    const html = data.map((meal) => (`
      <tr>
      <td class="meal_id">${meal.meal_id}</td>
      <td class="meal_name">${meal.meal_name}</td>
      <td class="meal_category">${meal.meal_category}</td>
      <td class="macro_id">${meal.macro_id}</td>
      <td class="calories">${meal.calories}</td>
      <td class="serving_size">${meal.serving_size}</td>
      <td class="cholesterol">${meal.cholesterol}</td>
      <td class="sodium">${meal.sodium}</td>
      <td class="carbs">${meal.carbs}</td>
      <td class="protein">${meal.protein}</td>
      <td class="fat">${meal.fat}</td>
      </tr>
      `));
    tbody.innerHTML = html.join(' ');
  });
  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selected = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, data.length - 1);
    return data[random];
  });
  console.table(selected);
  selected.forEach((meal) => {
    console.log(meal);
  });
  const chart = new CanvasJS.Chart('chartContainer', {
    animationsEnabled: true,
    title: {
      text: 'Macros by Meals'
    },
    axisX: {
      valueFormatString: selected.meal_name
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: 'stackedBar',
      name: 'Calories',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].calories, label: selected[0].meal_name},
        {y: selected[1].calories, label: selected[1].meal_name},
        {y: selected[2].calories, label: selected[2].meal_name},
        {y: selected[3].calories, label: selected[3].meal_name},
        {y: selected[4].calories, label: selected[4].meal_name},
        {y: selected[5].calories, label: selected[5].meal_name},
        {y: selected[6].calories, label: selected[6].meal_name},
        {y: selected[7].calories, label: selected[7].meal_name},
        {y: selected[8].calories, label: selected[8].meal_name},
        {y: selected[9].calories, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Serving Size',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].serving_size, label: selected[0].meal_name},
        {y: selected[1].serving_size, label: selected[1].meal_name},
        {y: selected[2].serving_size, label: selected[2].meal_name},
        {y: selected[3].serving_size, label: selected[3].meal_name},
        {y: selected[4].serving_size, label: selected[4].meal_name},
        {y: selected[5].serving_size, label: selected[5].meal_name},
        {y: selected[6].serving_size, label: selected[6].meal_name},
        {y: selected[7].serving_size, label: selected[7].meal_name},
        {y: selected[8].serving_size, label: selected[8].meal_name},
        {y: selected[9].serving_size, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].cholesterol, label: selected[0].meal_name},
        {y: selected[1].cholesterol, label: selected[1].meal_name},
        {y: selected[2].cholesterol, label: selected[2].meal_name},
        {y: selected[3].cholesterol, label: selected[3].meal_name},
        {y: selected[4].cholesterol, label: selected[4].meal_name},
        {y: selected[5].cholesterol, label: selected[5].meal_name},
        {y: selected[6].cholesterol, label: selected[6].meal_name},
        {y: selected[7].cholesterol, label: selected[7].meal_name},
        {y: selected[8].cholesterol, label: selected[8].meal_name},
        {y: selected[9].cholesterol, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].sodium, label: selected[0].meal_name},
        {y: selected[1].sodium, label: selected[1].meal_name},
        {y: selected[2].sodium, label: selected[2].meal_name},
        {y: selected[3].sodium, label: selected[3].meal_name},
        {y: selected[4].sodium, label: selected[4].meal_name},
        {y: selected[5].sodium, label: selected[5].meal_name},
        {y: selected[6].sodium, label: selected[6].meal_name},
        {y: selected[7].sodium, label: selected[7].meal_name},
        {y: selected[8].sodium, label: selected[8].meal_name},
        {y: selected[9].sodium, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].carbs, label: selected[0].meal_name},
        {y: selected[1].carbs, label: selected[1].meal_name},
        {y: selected[2].carbs, label: selected[2].meal_name},
        {y: selected[3].carbs, label: selected[3].meal_name},
        {y: selected[4].carbs, label: selected[4].meal_name},
        {y: selected[5].carbs, label: selected[5].meal_name},
        {y: selected[6].carbs, label: selected[6].meal_name},
        {y: selected[7].carbs, label: selected[7].meal_name},
        {y: selected[8].carbs, label: selected[8].meal_name},
        {y: selected[9].carbs, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].protein, label: selected[0].meal_name},
        {y: selected[1].protein, label: selected[1].meal_name},
        {y: selected[2].protein, label: selected[2].meal_name},
        {y: selected[3].protein, label: selected[3].meal_name},
        {y: selected[4].protein, label: selected[4].meal_name},
        {y: selected[5].protein, label: selected[5].meal_name},
        {y: selected[6].protein, label: selected[6].meal_name},
        {y: selected[7].protein, label: selected[7].meal_name},
        {y: selected[8].protein, label: selected[8].meal_name},
        {y: selected[9].protein, label: selected[9].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Fat',
      showInLegend: 'true',
      dataPoints: [
        {y: selected[0].fat, label: selected[0].meal_name},
        {y: selected[1].fat, label: selected[1].meal_name},
        {y: selected[2].fat, label: selected[2].meal_name},
        {y: selected[3].fat, label: selected[3].meal_name},
        {y: selected[4].fat, label: selected[4].meal_name},
        {y: selected[5].fat, label: selected[5].meal_name},
        {y: selected[6].fat, label: selected[6].meal_name},
        {y: selected[7].fat, label: selected[7].meal_name},
        {y: selected[8].fat, label: selected[8].meal_name},
        {y: selected[9].fat, label: selected[9].meal_name}
      ]
    },
    ]
  });
  chart.render();
  console.log(chart);
}

window.onload = windowActions;