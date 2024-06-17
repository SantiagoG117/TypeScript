/* 
*   Modules: 
    The export keyword allows us to use the public members of the Point class outside the scope of this
    module.
*/

export class Point {
    /* 
    * Classes and the cohestion principle: 
    Things that are related should be encapsulated in one class. The concept of an entity and its behavior should be together.
    */
    
    
    /* 
    * Constructor with optional parameters:
    By prefixing a constructor parameter with an access modifier (private or public) TypeScript compiler will generate a 
    field with the excact same name and it will initialize that field with the value of the argument
    
    By assigning a default value to the parameters, if no values are provided when creating an instance of the class, the 
    default values will be used.        
    */
   
   constructor(private _x: number = 0, private _y: number = 0){
    }


    //Methods 
    draw() {
        console.log('x = ' + this.x +  '; y =' + this.y)
    }

    //Properties (Getters and Setters)
    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        if(value < 0)
            throw new Error('Value cannot be less than 0');
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        if(value < 0)
            throw new Error('Value cannot be less than 0');
        this._y = value;
    }

};

