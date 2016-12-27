// Main screen, selects actions to do for users

var MainScreen = Screen.extend({

    enter: function(){
        // Display screen
        this.display('main_screen'); 
        
        // Set handlers
        this.html.find(".btn-control").off().click(function(e){
            e.preventDefault();
            fabrica.screens.control.enter();
        });
        this.html.find(".btn-make").off().click(function(e){
            e.preventDefault();
            fabrica.screens.make.enter();
        });
        this.html.find(".btn-configuration").off().click(function(e){
            e.preventDefault();
            fabrica.screens.configuration.enter();
        });

    }

});

fabrica.add_screen( 'main', new MainScreen() );


