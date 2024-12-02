function sendText() {
    var textField = document.getElementById("textField");
  
    if (
      textField.value !== ""
          ) {
      
     textField.value = "";
  
      return;
    } else {
      alert("Försök igen, det måste innehålla text.");
    }
  }
  
  