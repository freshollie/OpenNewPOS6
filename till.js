function Button(objectId, callback){
}

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
    
    var Main = [];
}

function Till(){
    var self = this;
    
    self.setScreen = function(screen){
        self.screen.hideAll();
        self.screen  = screen;
        self.screen.showAll();
    };
    
    self.makeButtonTables = function(){
        table = $('#orderTakingScreen').get(0);
        console.log(table.rows.length);
        
        for (i = 0; i<6; i++) {
            for (j = 0; j<10 ; j++) { 
                table.rows[table.rows.length-1].insertCell();
            };
            
            table.insertRow();
        };
        
        for (j = 0; j<10 ; j++) { 
            table.rows[table.rows.length-1].insertCell()
        };

        row = $('#topButtonsRowOne').get(0);

        for (i = 0; i<10; i++) { 
            row.insertCell()
        };

        row = $('#topButtonsRowTwo').get(0);
        
        for (i = 0; i<10; i++) { 
            row.insertCell()
        };
        
        
    };
    
    self.init = function(){
        self.screen = new Screen();
        self.makeButtonTables();
    };
};

till = new Till();

$(document).ready(till.init)