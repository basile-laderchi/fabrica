// Control screen : lists different control activities and allows to select which to use

var ControlScreen = Screen.extend({
    enter: function(){
        // Display this screen
        this.display('control_screen');

        // Setup button clicks       
        this.html.find(".btn-move").off().click(function(e){
            e.preventDefault();
            fabrica.screens.move.enter();
        });
        this.html.find(".btn-home").off().click(function(e){
            e.preventDefault();
            fabrica.screens.home.enter();
        });
        this.html.find(".btn-spindle").off().click(function(e){
            e.preventDefault();
            fabrica.screens.spindle.enter();
        });
        this.html.find(".btn-temperature").off().click(function(e){
            e.preventDefault();
            fabrica.screens.temperature.enter();
        });
        this.html.find(".btn-extruder").off().click(function(e){
            e.preventDefault();
            fabrica.screens.extruder.enter();
        });
        this.html.find(".btn-terminal").off().click(function(e){
            e.preventDefault();
            fabrica.screens.terminal.enter();
        });
    },

});

fabrica.add_screen('control', new ControlScreen()); 
