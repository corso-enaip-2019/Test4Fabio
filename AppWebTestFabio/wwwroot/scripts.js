function createTable(){
    
    document.write('<table id = "grid">');	
    for (i=0; i<6; i++) {	
    document.write('<tr>') 	
        for (j=0; j<6; j++) {	
            document.write('<td class= "cell">')
            document.write('</td>');
        }	
        document.write('</tr>')
    }	
    document.write('</table>');	
    document.close();
}

function start(){
    createTable()
}

class cell{
    constructor(){

    }
}