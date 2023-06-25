document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 8) {
      // Backspace key
      e.preventDefault();
      const currentValue = phoneInput.value.replace(/\D/g, "");
      const updatedValue = currentValue.substring(0, currentValue.length - 1);
      const formattedInput = formatPhoneNumber(updatedValue);
      phoneInput.value = formattedInput;
    }
  });

  phoneInput.addEventListener("input", () => {
    const input = phoneInput.value.replace(/\D/g, "").substring(0, 10);
    const formattedInput = formatPhoneNumber(input);
    phoneInput.value = formattedInput;
  });

  function formatPhoneNumber(phoneNumber) {
    const areaCode = phoneNumber.substring(0, 3);//inside parenthesis
    const firstPart = phoneNumber.substring(3, 6);//after parenthesis and before dash
    const secondPart = phoneNumber.substring(6, 10);
    let formattedNumber = "";

    if (areaCode) {
      formattedNumber = `(${areaCode})`;
    }
    if (firstPart) {
      formattedNumber += ` ${firstPart}`;
    }
    if (secondPart) {
      formattedNumber += `-${secondPart}`;
    }
    return formattedNumber;
  }
});
