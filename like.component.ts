/* 
Create a component that represents the "Like" functionality. 

The button responds to user actions:


Allow the consumer of this class to pass the initial number of likes when creating an instance of this class.

Your focus should be purely on defining a TypeScript class with the right members (fields, properties, methods, constructor).

Define this class in a separate module and use it in the main module.

Simulate the scenario where the user clicks the like component. Display the total number of likes and whether the
button is in the selected or unselected state on the console.
*/

export class LikeComponent {

    //* Constructor:
   constructor(private numberOfLikes: number = 0, private isSelected: boolean = false){}
   
   //*Public methods:
   click(){
        //Increment or decrement the number of likes based on the state of the button
        this.numberOfLikes += (this.isSelected) ? 1 : -1 ;

        //Toggle the isSelected field
        this.isSelected = !this.isSelected;

        //Print the current state of the button
        this.printState();
    }
    
    private printState(){
        console.log('Number of likes = ' + this.numberOfLikes);
        
        (this.isSelected) ? console.log('Button is clicked') : console.log('Button is not clicked');
    }
    
}