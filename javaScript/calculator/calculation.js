function update(value) {
    document.myForm.screen.value += value;
  
  }
  
  function result(VALUE) {
    document.myForm.screen.value = eval(document.myForm.screen.value);
  }
  
  function form_reset() {
    //Type the code here.
    document.myForm.screen.value = "";
  }