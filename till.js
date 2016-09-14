
function Order(objectId){
    var self = this;
    self.items =[];
    self.objectId = objectId;
    
    self.addItem = function(item){
        self.items.append(item);
        self.updateDisplay();
    }
    
    self.updateDisplay = function(){
    }
    
};

function Screen(){
    var self = this;
    
    self.buttons = []
    self.hideAll = function(){
        
    }
}

function Till(){
    var self = this;
    
    self.setScreen = function(screen){
        self.screen.hideAll();
        self.screen  = screen;
        self.screen.showAll();
    };
    
    self.makeButtonTable = function(){
        table = $('#buttons').get(0);
        
        for (i = 0; i < 9; i++) { 
            table.insertRow();
        }
        
        for (i = 0; i<9 ; i++) { 
            for (j = 0; j<9 ; j++) { 
                table.rows[i].insertCell()
            }
        }
        
    };
    
    self.init = function(){
        self.screen = new Screen();
        self.makeButtonTable();
    };
};

till = new Till();

$(document).ready(till.init)