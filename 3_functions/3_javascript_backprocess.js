/*

    1. Global Exectution => this (this is the minimum which will happen)

    2. Memory Phase
        - This is for allocating memory to the variables
        - variable becomees undefined as they contain value
        - function becomes defined as they process the data

    3. Execution Phase
        - As we move here and the values are passed to the function 
        - The function created a [NVM(new variable environemt) + Execution thread] for that process
        - after the function has done its process for example adding 2 numbers by the above process
        - it will send the return the result to the Global Execution
        - and we print the result from it
        - after this is completed the [NVM + Execution theread] gets deleted and does another process or addition if present



        - we executing a function , the calling of the function (eg : newfunction()) this is a globalscope when executing
        - and as it goes to that particular function inside it is of localscope 


    Falsy Values :
        false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
        
    Truthy Values : 
        "0" , 'false' , " " (Space in between) , [] , {} , function(){}  -Empty Function


*/