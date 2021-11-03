const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
  const elements = items.map((element) =>
    `<p><input type="checkbox" name="testNew" id="test" placeholder="es: pippo" >${element.title}${element.complete}</p> `
  );

  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = q('form');
  const input = q('form input');
  const list = q('p');
  render(list, dati);
});