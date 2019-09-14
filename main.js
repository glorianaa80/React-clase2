function Title(props) {
  return React.createElement('h1', { className: 'title' }, `${props.title}`);
}

function Paragraph(props) {
  return React.createElement('p', { className: 'info' }, `${props.cont}`);
}

function Image(props) {
  return React.createElement('img', { className: 'img', src: props.src });
}

// function Card(props) {
//   return React.createElement('div', { className: 'card col-sm-12 col-md-4' }, [
//     React.createElement(Image, { src: props.src }),
//     React.createElement(Title, { title: props.title }),
//     React.createElement(Paragraph, { cont: props.cont }),
//   ])
// };

// fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
//   .then(result => result.json())
//   .then(json => Render(json._embedded.episodes));


// function Render(result) {
//   console.log(result);
//   for (let i = 0; i < result.length; i =+ 1) {
//     const srcL = result.image;
//     let idTitle = result.id + 'title';
//     let idImg = result.id + 'img';
//     let idP = result.id + 'paragraph';
//     return React.createElement('div', { className: 'card card-sm-12 card-md-4', key: result.id },
//       [
//         React.createElement(Image, { src: srcL ? srcL.medium : defaultSrc, key: idImg }),
//         React.createElement(Title, { title: result[i].name, key: idTitle }),
//         React.createElement(Paragraph, { cont: result[i].summary, key: idP })
//       ]);
//   }
// }


// ReactDOM.render(
//   React.createElement('div', { className: 'card' }, Render()),
//   document.getElementById('root'),
//   console.log(result)
// )

fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
  .then(result => result.json())
  .then(items => Render(items._embedded.episodes));


function Render(props) {
  ReactDOM.render(
    React.createElement('div', {props}, itera(props)),
    document.getElementById('root')
  )
}

function itera(props) {
  let conta =[];
  for (const prop in props) {
    let item = episItem(props[prop]);
    conta.push(item);
  }
  return conta;
}

function episItem(items) {
  const defaultSrc = 'http://static.tvmaze.com/uploads/images/medium_landscape/128/320259.jpg';
  const src = items.image;
  let idtitle = items.id + 'title';
  let idimg = items.id + 'img';
  let idp = items.id + 'paragraph';
  return React.createElement('div', { className: 'card card-sm-12 card-md-4', key: items.id },
    [
      React.createElement(Image, { src: src ? src.medium : defaultSrc, key: idimg }),
      React.createElement(Title, { title: items.name, key: idtitle }),
      React.createElement(Paragraph, { cont: items.summary, key: idp })
    ]);
}
