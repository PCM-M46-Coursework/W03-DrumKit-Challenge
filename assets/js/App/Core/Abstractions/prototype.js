/**
 * Parses a HTML object from a HTML string.
 * @returns a HTML object, parsed from a string. 
 */
String.prototype.parseAsHtml = function()
{ 
    // NOTE: We cannot inject a HTML document into another HTML document. Parsing strings with
    // `.parseFromString` results in a full HTML document with `html`, `head`, and `body` tags.
    // Because of this, we need to extract the body of the resulting DOM, and return the child,
    // or children elements within.
    
    // Parse the string as an HTML object.
    const html = new DOMParser().parseFromString(this, 'text/html').body;

    // Select the wrapped DIV from the body of the HTML document.
    return html.childElementCount > 1 ? html.childNodes : html.firstChild;
}

Element.prototype.triggerClass = function(className, ttl) {
  // Add the specified class to the element
  this.classList.add(className);

  // If a TTL is provided, remove the class after the specified time
  if (ttl) {
    setTimeout(() => {
      this.classList.remove(className);
    }, ttl);
  }
};
