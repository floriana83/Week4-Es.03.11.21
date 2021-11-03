const q = (selector) => document.querySelector(selector);

const render = (container, items) =>
{
  const elements = items.map((element) =>
  {
  if(element.completed === true) {
    return `<p><input type="checkbox" name="testNew" id="test" placeholder="es: pippo" checked>${element.title}${element.completed}</p>`
  } else {
    return `<p><input type="checkbox" name="testNew" id="test" placeholder="es: pippo">${element.title}${element.completed}</p> `
  }
});

  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  const list = q('p');
  render(list, dati);
});

