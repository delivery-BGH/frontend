# Este é o template base para o projeto de Delivery e Controle.

- Recomendações. <br>
  node 18.17.1

- Baixe os pacotes necessários. <br>

```js
npm install
```

- Inicie o StorryBooks para ver a documentenção interativa dos componentes. <br>

```js
npm run storybook
```

- Inicie o Projeto. <br>

```js
npm run dev
```

- Inicie o Json-Server <br>

```js
npx json-server --watch db.json
```

- [Usuarios](http://localhost:3000/usuarios)<br>
- [Produtos](http://localhost:3000/produtos)<br>
- [Complementos](http://localhost:3000/complementos)<br>
- [Categorias](http://localhost:3000/categorias)<br>
- [Status do pedido](http://localhost:3000/statusDoPedido)<br>
- [Bairro disponiveis para entrega](http://localhost:3000/<br>bairroParaEntrega)<br>
- [Pedidos](http://localhost:3000/pedidos)

## Gerando versão para instalação no dispositivo mobile.

- Gere a build do projeto web.

```js
   npm run build
```

- Documentação [Capacitor](https://capacitorjs.com/docs/getting-started)

### Android

- Adicione a plataforma Android.

```js
   npm i @capacitor/android
```

- Crie o projeto Android.

```js
   npx cap add android
```

- Abra o projeto Android no [Android studio](https://developer.android.com/studio).

```js
   npx cap open android
```

### IOS

- Adicione a plataforma IOS

```js
   npm install @capacitor/ios
```

- Crie o projeto IOS.

```js
   npx cap add ios
```

- Abra o projeto IOS no [Xcode](https://developer.apple.com/xcode/).

```js
   npx cap open ios
```
