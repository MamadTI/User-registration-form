# User Registration Form

## 📋 Project Overview
**SimpleFlow** is a modern and responsive user registration form designed with **HTML, CSS, and JavaScript**. The form provides real-time validation and user-friendly feedback, ensuring a smooth experience for users when creating an account. This project demonstrates form validation, interactive UI elements, and responsive design without relying on any frameworks or libraries.

---

## 🎨 Features

- **Responsive Design**: Works on both desktop and mobile screens.
- **Real-time Input Validation**:
  - Username: 3–15 characters, letters and numbers only.
  - Full Name: Letters and spaces only, must include first and last name.
  - Email: Valid email format required.
  - Password: Must be strong, containing at least 8 characters, a number or symbol, and cannot include personal info.
- **Password Strength Indicator**: Updates dynamically based on rules.
- **Interactive Form Feedback**: Input fields show success or error states.
- **Disabled Submit Button**: Form submission is only allowed when all inputs are valid.
- **Success Message**: Displays confirmation when the account is created successfully.
- **Console Output**: Logs submitted data (with masked password) for testing purposes.

---

## 🛠️ Technologies Used

- **HTML5**: Markup and structure of the form.
- **CSS3**: Styling, responsive layout, and visual feedback.
- **JavaScript (Vanilla)**: Real-time validation, form submission handling, and dynamic UI updates.

---

## 🏗️ Project Structure

```
User-registration-form/
├── index.html # Main HTML file
├── css/
│ └── styles.css # Custom styles for the form
├── js/
│ └── script.js # Form validation and interactivity
└── assets/
    ├── form-image.png   # Form illustration
    └── waves-blue.jpg   # Background image for left panel
```

---

## ⚡ Usage

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Fill out the registration form:
   - Enter a valid username, full name, email, and password.
4. The "Create Account" button becomes active once all inputs are valid.
5. Click "Create Account" to see the success message and check console logs.

---

## 📐 Design Highlights

- Left panel with welcoming text and background image.
- Right panel with the registration form.
- Interactive tabs with a locked "Sign In" option.
- Modern color scheme and typography for readability.

---

## 📱 Responsive Design

The layout adapts to smaller screens:

- Columns stack vertically on mobile devices.
- Input fields and buttons adjust width accordingly.
- Visual elements scale to maintain readability and usability.

---

## 💡 Future Improvements

- Implement actual account creation via backend.
- Unlock the "Sign In" tab for user login functionality.
- Add more advanced password strength rules and suggestions.
- Improve accessibility features (e.g., ARIA roles).

---

## 📝 License

This project is free to use and modify. No restrictions apply.
