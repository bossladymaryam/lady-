document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.getElementById("nutrition-form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const gender = document.getElementById("gender").value;
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const age = parseFloat(document.getElementById("age").value);
        const activityLevel = document.getElementById("activity-level").value;
        const goal = document.getElementById("goal").value;


        const isNonPositive = weight <= 0 || height <= 0 || age <= 0;
        
        // Display alert if any value is non-positive
        isNonPositive && alert("Please enter positive values for weight, height, and age.");

        if (isNonPositive) return; // Stop further execution
        // Perform calculation
        let bmr; // Basal Metabolic Rate
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        let calorieNeeds;
        switch (activityLevel) {
            case "sedentary":
                calorieNeeds = bmr * 1.2;
                break;
            case "lightly-active":
                calorieNeeds = bmr * 1.375;
                break;
            case "moderately-active":
                calorieNeeds = bmr * 1.55;
                break;
            case "very-active":
                calorieNeeds = bmr * 1.725;
                break;
            case "extra-active":
                calorieNeeds = bmr * 1.9;
                break;
            default:
                calorieNeeds = 0;
        }

        // Adjust calorie needs based on goal
        switch (goal) {
            case "weight-loss":
                calorieNeeds -= 500; // Calorie deficit for weight loss
                break;
            case "muscle-gain":
                calorieNeeds += 500; // Calorie surplus for muscle gain
                break;
            case "maintenance":
            default:
                // No adjustment needed for maintenance
                break;
        }
        // Display the result
       // Display the result
       const resultElement = document.getElementById("result");
       resultElement.innerHTML = "Your estimated daily calorie needs: " + calorieNeeds.toFixed(2) + " calories";
   });
});
