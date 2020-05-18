// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };


    var FUCKYOUDATA = {
        allItems: {
          allExpenses = [],
          allIncomes = []
        }
        totals: {
          exp: 0,
          inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem;

            ID = 0;

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;

        }
    };

})();




// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn',
    };

    return {
      getInput: function() {
        return {
          type: document.querySelector(DOMstrings.inputType).value,
          descripton: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
        };
      },

      getDOMstrings: function() {
        return DOMstrings;
      }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

      var setupEventListeners = function() {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
      };



      var DOM = UICtrl.getDOMstrings();

      var ctrlAddItem = function() {

        // 1. Get field input data
        var input = UICtrl.getInput();

        // 2. Add the item to budget CONTROLLER

        // 3. add the item to UI

        // 4. calc the budget

        // 5. display the budget on UI

      };

      return {
          init: function(){
              console.log('Application has started.');
              setupEventListeners();
          }
      };

})(budgetController, UIController);

controller.init();
