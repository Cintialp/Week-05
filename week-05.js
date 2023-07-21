// Food menu
class Menu {
    constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    }
    
    describe() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name} food ${this.ingredients}`;
    }
    }
    class ingredient {
    constructor(name) {
    this.name = name;
    this.ingredients = [];
    }
    
    addIngredients(Tomato) {
    if (restaurant instanceof restaurant) {
    this.menu.push(restaurant);
    } else {
    throw new Error(`You can only add a new ingridient at time. 
    argument is not food: ${restaurant}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.restaurant.length} Menu.`;
    }
    }
    class ingreditentToAdd { // Usde the input of our choices
    constructor() {
    this.menu = [];
    this.selectedFood= null; // Give the option to select the menu/menu
    }
    
    start() { // entryng ingredients or single items
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createMenu();
    break;
    case '2' :
    this.viewMenu();
    break;
    case '3' :
    this.deleteItem();
    break;
    case '4' :
    this.displayEntireMenu();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new menu
    2) view a menu
    3) delete a ingredient
    4) display all the menu
    `);
    }
    
    showFoodMenuOptions(FoodInfo) {
    return prompt(`
    0) back
    1) add a new item
    2) delete a item
    -----------------
    ${FoodInfo}
    `);
    }
    
    displayFood() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
    teamString += i+ ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
    }
    
    createTeam() {
    let name = prompt('Enter name for new team: ');
    this.teams.push(new Team(name));
    }
    
    viewMenu() {
    let index = prompt("Enter the index of the  that food you want to view:");
    if (index > -1 && index < this.menu.length) {
    this.selectedTeam = this.menu[index];
    let description = 'Team Name: ' + this.selectedIngredients.name + '\n';
    description += ' ' + this.selectedIngredients.describe() + '\n ';
    for (let i = 0; i < this.selectedIngredients.food.length; i++) {
   
    description += i + ') ' + this.selectedIngredients.food[i].describe() + '\n';
    }
    let selection1 = this.showTeamMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createPlate();
    break;
    case '2' :
    this.deletePlate();
    }
    } // validate user input
    }
    
    deleteIngredients() {
    let index = prompt('Enter the index of items you would like to delete: ');
    if (index > -1 && index < this.deleteIngredients.length) {
    this.deleteIngredients.splice(index,1);
    }
    }
    
    
    createPlayer() {
    let name = prompt('Enter name for new ingredient: ');
    let position = prompt('Enter position for new Food: ');
    //Food and ingredients changes
    this.selectedIngredients.addPlayer(new food(name,position));
    }
    
    deletePlayer() {
    let index = prompt('Enter the informacion of the food that you wish to delete: ');
if (index > -1 && index < this.selectedIngreditens.food.length) { this.selectedIngredients.food.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    