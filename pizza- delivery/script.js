 function placeOrder() {
      const base = document.getElementById('base').value;
      const size = document.getElementById('size').value;
       const sauce = document.getElementById('sauce').value;
        const cheese = document.getElementById('cheese').value;
      const topping = document.getElementById('topping').value;
      const summary = `
        <h3>Your Pizza Order Summary:</h3>
        <p><strong>Base:</strong> ${base}</p>
          <p><strong>Size:</strong> ${size}</p>
        <p><strong>Sauce:</strong> ${sauce}</p>
         <p><strong>Cheese:</strong> ${cheese}</p>
          <p><strong>Topping:</strong> ${topping}</p>
        <p style="color:limegreen;"><strong>Estimated Delivery:</strong> 30 minutes</p> 
         `;
                 document.getElementById('summary').innerHTML = summary; }