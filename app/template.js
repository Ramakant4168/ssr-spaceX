export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
      <div id="root">${body}</div>
    </body>

    <script src="/assets/bundle.js"></script>
  </html>
`);
