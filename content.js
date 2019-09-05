/**
 * Texts - types available
 */
var darkText = 'Dark Theme';
var lightText = 'Light Theme';

// List of available themes
var themeElements = [darkText, lightText];

// Button inside the dropdown for telegram
var buttonToAdd = document.getElementsByClassName('dropdown-menu');
// first element is the telegram dropdown, second element is the top right corner dropdown

// Container element
var buttonListElement = document.createElement('li');

for (var i = 0; i < themeElements.length; i++) {
  var themedLink = createLinkElement(themeElements[i]);
  buttonListElement.appendChild(themedLink);
}

// Add the button at the end of the dropdown
buttonToAdd[0].appendChild(buttonListElement);

/**
 * Helper function to create the a tag in the list element
 * 
 * @param {string} textValue 
 */
function createLinkElement(textValue) {
  // Link element
  var buttonLink = document.createElement('a');
  buttonLink.className = 'TelegramDesignA';
  buttonLink.onclick = function() {
    var mainElement = document.getElementsByClassName('page_wrap')[0];

    switch (textValue) {
      case darkText:
        mainElement.classList.add('page_wrap--dark');
        break;
      case lightText:
        mainElement.classList.remove('page_wrap--dark');
        break;
      default:
    }
  }

  var iconElement = createIconElement();
  var textElement = createTextElement(textValue);

  buttonLink.appendChild(iconElement);
  buttonLink.appendChild(textElement);

  return buttonLink;
}

function createIconElement() {
  var iconElement = document.createElement('i');
  iconElement.className = 'TelegramDesignA__icon';

  return iconElement;
}

function createTextElement(textValue) {
  var textElement = document.createElement('span');
  textElement.className = 'TelegramDesignA__text';
  textElement.innerHTML = textValue;

  return textElement;
}
