


    var YOB = window.prompt ( "Please enter your Year of Birth:")
    var D = new Date()
    var NY = D.getFullYear()
    var age = NY - YOB

        if ( age < 18 ) { console.log ( "You are a minor.")}
        else if ( age >= 18 && age <= 36) { console.log ( "You are a youth.")}
        else  { console.log ( "You are an elder.")}

         
        
        
        
 
 