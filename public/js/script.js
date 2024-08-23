// Function to toggle password visibility
function togglePasswordVisibility(inputSelector, iconSelector) {
    const input = document.querySelector(inputSelector);
    const icon = document.querySelector(iconSelector);

    icon.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        icon.classList.toggle("fa-eye-slash", isPassword);
        icon.classList.toggle("fa-eye", !isPassword);
    });
}

// Apply the function to both password and confirm password inputs
togglePasswordVisibility(".password-container input", ".password-container i");
togglePasswordVisibility(".confirm-container input", ".confirm-container i");
