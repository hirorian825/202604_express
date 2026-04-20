const express = require('express')
const app = express()
const port = "nothing, it's callback function."// 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
// ポート未指定では、空いているポートが自動選択される
const server = app.listen(() => {
  const { port, address, family } = server.address();
  console.log(`listening on adress: ${address}, port: ${port} (family: ${family})`);
});

// ちなみにexpressはnodeのhttpサーバの関数を呼び出しているだけらしい