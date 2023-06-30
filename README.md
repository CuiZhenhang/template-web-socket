# Template Web with Socket

This is a project template for web with Socket.io and TypeScript.

## Install

Download the project first, then running:

```sh
cd template-web-socket
npm install
npm run build
cd ./web
npm install
npm run build
```

## Usage

### Develop

To develop, run:

```sh
# develop for server
cd template-web-socket
npm run dev
# develop for client
cd ./web
npm run dev
```

The source code of server is in the folder [./src/](./src/).<br>
And the source code of client is in the folder [./web/src/](./web/src/).

If you want to add more typescript files to client, you may need to modify the entry of webpack. See [webpack](https://webpack.js.org/concepts/entry-points/) for more.

### Build

To build, run:

```sh
# build for server
cd template-web-socket
npm run build
# build for client
cd ./web
npm run build
```

The built files of server are in the folder [./dist/](./dist/).<br>
And the built files of client are in the folder [./web/dist/](./web/dist/) and [./public/](./public/).

### Package

To package, run this or something like this:

```sh
# this will package an executable `.exe` file in the folder `executables`.
cd template-web-socket
pkg . -t node16-win-x64
```

JavaScript files in the folder [./dist/](./dist/) will be compiled and packaged.<br>
All files in the folder [./public/](./public/) will be packaged.

To read the files in the folder [./public/](./public/) from server, use `path.resolve(__dirname, '../public')` as a root path.

About more, see [pkg](https://github.com/vercel/pkg).

## License

The project is licensed under the MIT license.
