const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get Values
    const employeeId = document.getElementById("employeeId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const designation = document.getElementById("designation").value.trim();
    const joiningDate = document.getElementById("joiningDate").value;
    const salary = document.getElementById("salary").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // 1. Required Fields Validation
    if (
        employeeId === "" ||
        fullName === "" ||
        email === "" ||
        phone === "" ||
        department === "" ||
        designation === "" ||
        joiningDate === "" ||
        salary === "" ||
        !gender
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // 2. Employee ID Validation
    if (!employeeId.startsWith("ASE-")) {
        alert("Employee ID must start with ASE-");
        return;
    }

    // 3. Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // 4. Phone Number Validation (11 digits)
    const phonePattern = /^\d{11}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 11 digits.");
        return;
    }

    // 5. Salary Validation
    if (Number(salary) < 0) {
        alert("Salary cannot be negative.");
        return;
    }

    // 6. Joining Date Validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(joiningDate);

    if (selectedDate > today) {
        alert("Joining date cannot be in the future.");
        return;
    }

    // Success Message
    alert("Employee Registered Successfully!");

    // Reset Form
    form.reset();
});