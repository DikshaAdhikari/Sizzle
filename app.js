// DECLARING VARIABLES
const btnMeal = document.getElementById('btn');
const mealContainer = document.getElementById('mealContainer');

// EVENT TRIGGERED ON BUTTON CLICK
btnMeal.addEventListener('click', () => {

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            create(res.meals[0])
        });
});

// FUNCTON INVOKED ON BUTTON CLICK
function create(meal) {
    const ingredients = [];
    for (var i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]}`);
        } else { 
            break;
        }
    }
    mealContainer.innerHTML = `
                <div>
                    <img src ="${meal.strMealThumb}" width="100%" class="picture borderRadius" />
                    
                    <h4>Ingredients:</h4>
                    <ul>
                        ${ingredients.map(ingredient => `
                            <li>${ingredient}</li>
                        `).join('')}
                    </ul>
                </div>
                <div id="text">
                    <h2>${meal.strMeal.toUpperCase()}</h2>
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                    <p><strong>Area:</strong> ${meal.strArea}</p>
                    <p><strong>Tags:</strong> ${meal.strTags}</p>
                    <p>${meal.strInstructions}<p/>
                    
                </div>
                <div class="video">
                    <h3>VIDEO RECIPE</h3>
                    <iframe src ="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" width="100%" class="borderRadius"/>
                </div>
    `
}