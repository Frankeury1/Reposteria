document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const logo = document.getElementById('logo');
    const homeLink = document.getElementById('home-link');
    const mobileHomeLink = document.getElementById('mobile-home-link');
    const mobileRecipesLink = document.getElementById('mobile-recipes-link');
    const heroSection = document.getElementById('hero-section');
    const recipesGrid = document.getElementById('recipes-grid');
    const recipeDetail = document.getElementById('recipe-detail');
    const mainContent = document.getElementById('main-content');
  
    // State
    let selectedRecipe = null;
  
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  
    // Close mobile menu when clicking on a link
    mobileHomeLink.addEventListener('click', function(e) {
      e.preventDefault();
      mobileNav.classList.remove('active');
      showHomePage();
    });
  
    mobileRecipesLink.addEventListener('click', function() {
      mobileNav.classList.remove('active');
    });
  
    // Home navigation
    logo.addEventListener('click', showHomePage);
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      showHomePage();
    });
  
    // Initialize the page
    function init() {
      renderRecipeCards();
      showHomePage();
    }
  
    // Show home page
    function showHomePage() {
      selectedRecipe = null;
      heroSection.style.display = 'block';
      document.getElementById('recipes').style.display = 'block';
      recipeDetail.style.display = 'none';
      recipeDetail.classList.remove('active');
      window.scrollTo(0, 0);
    }
  
    // Render recipe cards
    function renderRecipeCards() {
      recipesGrid.innerHTML = '';
      
      recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image">
          <div class="recipe-card-content">
            <h3 class="recipe-card-title">${recipe.title}</h3>
            <p class="recipe-card-description">${recipe.description}</p>
            <div class="recipe-card-footer">
              <span class="recipe-card-time">${recipe.prepTime}</span>
              <span class="recipe-card-button">Ver Receta</span>
            </div>
          </div>
        `;
        
        recipeCard.addEventListener('click', function() {
          showRecipeDetail(recipe);
        });
        
        recipesGrid.appendChild(recipeCard);
      });
    }
  
    // Show recipe detail
    function showRecipeDetail(recipe) {
      selectedRecipe = recipe;
      heroSection.style.display = 'none';
      document.getElementById('recipes').style.display = 'none';
      
      // Create recipe detail content
      let ingredientsHTML = '';
      recipe.sections.forEach(section => {
        ingredientsHTML += `
          <div class="recipe-detail-subsection">
            ${section.title ? `<h3>${section.title}:</h3>` : ''}
            <ul class="recipe-detail-ingredients">
              ${section.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
          </div>
        `;
      });
  
      let instructionsHTML = '';
      recipe.instructions.forEach(section => {
        instructionsHTML += `
          <div class="recipe-detail-subsection">
            ${section.title ? `<h3>${section.title}:</h3>` : ''}
            <ol class="recipe-detail-instructions">
              ${section.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        `;
      });
  
      recipeDetail.innerHTML = `
        <div class="back-button" id="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Volver a recetas
        </div>
  
        <div class="recipe-detail-header">
          <div class="recipe-detail-image-container">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
          </div>
          
          <div class="recipe-detail-info">
            <h1 class="recipe-detail-title">${recipe.title}</h1>
            <p class="recipe-detail-description">${recipe.description}</p>
            
            <div class="recipe-detail-meta">
              <div class="recipe-detail-meta-item">
                ⏱️ ${recipe.prepTime}
              </div>
              <div class="recipe-detail-meta-item">
                👨‍🍳 ${recipe.difficulty}
              </div>
            </div>
          </div>
        </div>
  
        <div class="recipe-detail-content">
          <div class="recipe-detail-section">
            <h2>Ingredientes</h2>
            ${ingredientsHTML}
          </div>
  
          <div class="recipe-detail-section">
            <h2>Instrucciones</h2>
            ${instructionsHTML}
          </div>
        </div>
      `;
  
      // Add back button event listener
      document.getElementById('back-button').addEventListener('click', showHomePage);
      
      recipeDetail.style.display = 'block';
      recipeDetail.classList.add('active');
      window.scrollTo(0, 0);
    }
  
    // Initialize the page
    init();
  });