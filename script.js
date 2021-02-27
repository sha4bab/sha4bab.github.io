 class calculator{
     consructer(previousoperandtextelement,currentoperandtextelement){
         this.previousoperandtextelement = previousoperandtextelement
         this.currentoperandtextelement = currentoperandtextelement
         this.clear()
     }
  clear() {
this.currentoperand = ''
this.previousoperand = ''
this.operation = undifined
  }
     
delete() {

}
appendnumber(number) {
this.currentoperand = number
}
 }

chooseoperation(operation) {

}
Compute() {

}
updatedisplay() {
this.currentoperandtextelement.innertext = this.currentoperand
}
const numberbuttons = document.queryselectorall([data-number],)
const operationbuttons = document.queryselectorall([data-operation],)
const equalsbutton = document.queryselector('data-equals')
const deletebutton = document.queryselector('data-delete')
const allclearbutton = document.queryselector('data-all-clear')
const previousoperandtextelement = document.queryselector('data-previous-operand')
const currentoperandtextelement = document.queryselector('data-current-opperant')

const calculator = new calculator(previousoperandtextelement,currentoperandtextelement)

numberbuttons.foreach(button=>{
    button.addeventlistener('click', () =>{
        calculator.appendnumber(button.innertext)
        calculator.updatedisplay()
    })
})