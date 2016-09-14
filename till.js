
function Screen(){
    buttons = []
        
    hideAll = function(){
    }
}

function Till(){
    
    this.setScreen = function(screen){
        this.screen.hideAll();
        this.screen  = screen;
        this.screen.showAll();
    };
    
    this.makeButtonTable = function(){
        table = $('#buttons').get(0);
        console.log(table)
        
        for (i = 0; i < 9; i++) { 
            table.insertRow();
        }
        
        for (i = 0; i<9 ; i++) { 
            for (j = 0; j<9 ; j++) { 
                table.rows[i].insertCell()
            }
        }
        
    };
    
    this.init = function(){
        this.screen = new Screen();
        this.makeButtonTable();
    };
};

till = new Till();

$(document).ready(till.makeButtonTable)