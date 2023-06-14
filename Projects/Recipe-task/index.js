async function fetchData() {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=tandoori';
    let data = await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData.meals[0]);
}

