// Select color input
const colourPicker = document.querySelector('#colorPicker');
// Select size input
const size = document.querySelector('#sizePicker');
// Select element with ID inputWidth
const widthInput = document.querySelector('#inputWidth');
// Select element with ID inputHeight
const heightInput = document.querySelector('#inputHeight');
// Select element with ID pixelCanvas
const grid = document.querySelector('#pixelCanvas');
 //MakeGrid function declaration.
function makeGrid() {
  let width = widthInput.value;
  let height = heightInput.value;
  grid.innerHTML = "";
  //outer for loop for creation of grid rows.
  for (let v = 1; v <= height; v++) {
      const row = document.createElement('tr');
      grid.appendChild(row);
      //inner nested loop for creation of grid columns.
      for (let h = 1; h <= width; h++) {
        const column = document.createElement('td');
        row.appendChild(column);
        // EventListener to add selected colour to cell that is clicked on
        column.addEventListener('click', function(event) {
        let colour = colourPicker.value;
        event.target.style.backgroundColor = colour;
      });
    }
  }
}
// Check for submit event type on sizePicker target and call makeGrid fn.
size.addEventListener('submit', function(event) {
  event.preventDefault(); //call prevent dft method on event target
  makeGrid();
});
