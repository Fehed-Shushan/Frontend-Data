async function sendText() {
    var TextNameField = document.getElementById("Textname");
  
  
    if (
      TextNameField.value !== "" 
    ) {
      let TextData = {
        TextNameField: TextNameField.value,
        
      };
  
      try {
        let response = await fetch("http://localhost:5000/api/text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(TextData),
        });
  
        if (response.ok) {
          let result = await response.json();
          console.log(result.message);
          alert("Text is sent successfully!");
  
          TextNameField.value = "";
          
        } else {
          let errorResult = await response.json();
          console.error(errorResult.message);
          alert("Error: " + errorResult.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send text, try again.");
      }
    }
  }