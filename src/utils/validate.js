export const checkValidate = (email, password) => {
    // Validate email or phone
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    // Validate full name (at least 2 words, letters only)

    // Validate password
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) 
        return "Your email or phone format doesn’t look correct!";

    if (!isPasswordValid) 
        return "Password must be at least 8 characters, including uppercase, lowercase, number, and special character!";

    return null; 
};
