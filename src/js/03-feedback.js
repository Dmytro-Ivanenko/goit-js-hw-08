var throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");
const submitButton = document.querySelector(".feedback-form button");

({ email, message } = form.elements);

const checkStorage = () => {
	let item = localStorage.getItem("feedback-form-state");
	if (item === null) {
		console.log("no data in storage");
		return;
	} else {
		email.value = JSON.parse(item).email;
		message.value = JSON.parse(item).message;
	}
};

checkStorage();

// Event handlers

const feedbackData = {
	email,
	message,
};

const formInputHandler = e => {
	feedbackData.email = email.value;
	feedbackData.message = message.value;

	localStorage.setItem("feedback-form-state", JSON.stringify(feedbackData));
};

const submitHandler = e => {
	e.preventDefault();

	localStorage.removeItem("feedback-form-state");
	email.value = "";
	message.value = "";

	console.log(feedbackData);
};

// Events

form.addEventListener("input", throttle(formInputHandler, 500));
submitButton.addEventListener("click", submitHandler);
