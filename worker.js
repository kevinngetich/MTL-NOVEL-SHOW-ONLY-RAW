// Step 1: Select all elements with the class "par fontsize-16"
const elements = document.querySelectorAll('.par.fontsize-16');

// Step 2: Iterate through the selected elements
elements.forEach(element => {
  // Step 3: Check if it has <p> children
  const hasPChildren = Array.from(element.children).some(child => child.tagName.toLowerCase() === 'p');

  // Step 4: If it has <p> children, filter and hide those with English text
  if (hasPChildren) {
    Array.from(element.children).forEach(child => {
      if (child.tagName.toLowerCase() === 'p') {
        const text = child.textContent.trim();
        const firstFiveCharacters = text.substring(0, 5);
        const isEnglish = /[A-Za-z]/.test(firstFiveCharacters);
        console.log(isEnglish);
        if (isEnglish) {
          child.style.display = 'none';
        }
      }
    });
  }

  // Trigger a google translate event.
  const rightClickEvent = new MouseEvent('contextmenu', {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 2, // Right mouse button
    clientX: 100, // Adjust these coordinates as needed
    clientY: 100,
  });

  // 3. Dispatch the right-click event on the target element
  element.dispatchEvent(rightClickEvent);

  // 4. Wait for a brief moment (e.g., 500ms) for the context menu to appear
  setTimeout(() => {
    // 5. Simulate a click event on the "Translate to English" option
    const translateMenuItem = document.querySelector('.your-translate-option-selector');
    if (translateMenuItem) {
      translateMenuItem.click();
    }
  }, 500); // Adjust the delay as needed
});
