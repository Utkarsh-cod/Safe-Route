function search() {
    const location = document.getElementById("locationInput").value;
    if (location.trim() === "") {
      alert("Please enter a location.");
      return;
    }
  
    // Simulated safe route output
    const results = document.getElementById("results");
    results.innerHTML = `
      <p>Showing safe routes near <strong>${location}</strong>:</p>
      <ul>
        <li>Route 1: Well-lit, police patrolled</li>
        <li>Route 2: Near public areas</li>
      </ul>
    `;
  }
  