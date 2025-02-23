const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: "./src/main/index.tsx",
//   output: {
//     path: path.join(__dirname, "public/js"),
//     publicPath: "/public/js/",
//     filename: "bundle.js",
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", "scss"],
//     alias: {
//       "@": path.join(__dirname, "src"),
//     },
//   },
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.ts(x?)$/,
//   //       loader: "ts-loader",
//   //       exclude: /node-modules/,
//   //     },
//   //     {
//   //       test: /\.scss$/,
//   //       use: [
//   //         {
//   //           loader: "style-loader",
//   //         },
//   //         {
//   //           loader: "css-loader",
//   //           options: {
//   //             modules: true,
//   //           },
//   //         },
//   //         {
//   //           loader: "sass-loader",
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.module\.scss$/, // 🔹 Processa SCSS Modules
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: {
//               modules: true, // Ativa o CSS Modules
//             },
//           },
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(scss|sass)$/, // 📌 Para arquivos SCSS normais (sem modules)
//         exclude: /\.module\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },

//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     devMiddleware: {
//       writeToDisk: true,
//     },
//     historyApiFallback: true,
//   },
//   // externals: {
//   //   react: "React",
//   //   "react-dom": "ReactDOM",
//   // },
//   plugins: [new CleanWebpackPlugin()],
// };

module.exports = {
  mode: "development",

  entry: {
    main: "./src/main/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
    publicPath: "/",
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.module\.s[ac]ss$/, // Regras apenas para arquivos SCSS com "module"
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]", // Nome único das classes
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/, // Regras para arquivos SCSS normais (sem module)
        exclude: /\.module\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/, // Regra para arquivos TypeScript (.ts ou .tsx)
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html", // Mantém seu HTML original
      inject: "body", // Gar
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"), // Servindo arquivos de public/
    },
    historyApiFallback: {
      index: "/index.html", // Redireciona para index.html sem conflitos
    },
    port: 3000,
    open: true, // Abre o navegador automaticamente
    liveReload: true, // Mantém o live reload ativado
    hot: true, // Habilita HMR (Hot Module Replacement)
  },
};
