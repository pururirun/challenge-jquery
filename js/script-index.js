$(document).ready( function(){

$('.hidden').toggle();


$(function () {
		$('.textNews').text('NUEVAS RECETAS');
});
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
		renderActivities(activitiesArray)
});


/*
* Función que se encarga de imprimir TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true) {
			renderRecipe(recipesArray[i])
		}
	}
	//console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de imprimir UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".list-recipes").append("<h4><span class='title-recipe'>"+recipe.title+"</span><span class='author-recipe'>"+recipe.source.name+ "</span><img src='img/recipes/320x350/" + recipe.name + ".jpg'/></h4>");

	console.log('Voy a imprimir la receta: ', recipe);
}



/*
* Función que se encarga de imprimir todas las actividades
*/
function renderActivities(activitiesArray) {
	//console.log('Activities: ', activitiesArray);
	for (var i = 0; i < activitiesArray.length; i++) {
     renderActivity(activitiesArray[i]);
     if (activitiesArray > 0) {
       $(".wrapper-message").hide();
     }
   }
 }

/*
* Función que se encarga de imprimir una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$(".list-activities").append("<h4><span class='author'>"+recipe.userName+"</span><span class='recipe'>"+recipe.recipeName+"</span><span class='recipe'>"+recipe.recipeName+"</span></h4>")
}
