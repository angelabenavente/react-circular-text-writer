# react-circular-text-writer [![NPM version](https://img.shields.io/npm/v/react-circular-text-writer.svg?style=flat)](https://www.npmjs.com/package/react-circular-text-writer) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](<[LICENSE](https://github.com/angelabenavente/react-circular-text-writer/LICENSE)>) [![NPM total downloads](https://img.shields.io/npm/dt/react-circular-text-writer.svg?style=flat)](https://www.npmjs.com/package/react-circular-text-writer)

<!-- [![NPM monthly downloads](https://img.shields.io/npm/dm/react-circular-text-writer.svg?style=flat)](https://www.npmjs.com/package/react-circular-text-writer)-->

> React utility that displays a given text in a circular pattern. This function takes a string of text and places it along the circumference of a circle with a specified radius. Each letter of the text is positioned around the circle, with a calculated rotation angle to ensure the text fits perfectly.

<!-- `react-circular-text-writer` is a tiny library that works in all Javascript environments. -->

---

## 🚀 Features

- **Easy text arrangement**: Distributes the letters of a text string in a circular layout within an HTML container.
- **Customizable text appearance**: Allows customization of text color, font, and font weight.
  Precise positioning: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Precise positioning**: Uses a relative-positioned container and absolutely-positioned elements to adjust text placement precisely.
- **Support for custom fonts**: Allows you to specify a custom font if needed, in addition to standard monospaced fonts.
- **ESM and CJS support**: Fully compatible with modern module systems.

---

## 🚀 Parameters

- **text (string)**: The text to be displayed in a circular pattern.
- **radius (number)**: The radius of the circle where the letters will be placed (optional).
- **id (optional string)**: The ID of the HTML container element where the circular text will be inserted.
- **options (optional object)**:
  - **color (string, default #000000)**: The text color.
  - **fontFamily (string, default "Menlo, monospace")**: he font to be used. It can be one of the following monospaced fonts:'Menlo', 'Courier New', 'Consolas', 'Lucida Console', 'Monaco', 'monospace', or "customFont" if a custom font is desired.
  - **fontWeight (number, default 400)**: The weight of the font.
  - **color (string, default #000000)**: The text color.

---

## 📦 Installation

You can install `react-circular-text-writer` using your favorite package manager:

```
# Using pnpm
pnpm add react-circular-text-writer

# Using npm
npm install react-circular-text-writer

# Using yarn
yarn add react-circular-text-writer
```

---

## 🌟 Usage

Here's how to use the library in your project:

### Import the library

```
// CommonJS
const CircularTextWriter = require('react-circular-text-writer');

// ES Modules
import CircularTextWriter from 'react-circular-text-writer';
```

### Basic example

```
import CircularTextWriter from 'react-circular-text-writer';

<CircularTextWriter
  text="This is a circular text "
  radius={150}
  id="react-circular-text-writer"
  options={{
    color: "#ff0000", // red
    fontFamily: "Menlo",
    fontWeight: 700, // bold
  }}
/>
```

## Result

<img width="397" alt="react-circular-text-writer" src="https://github.com/user-attachments/assets/21ea584f-371d-4396-af5c-7d911e8e7143" />


### Long text example

```
import CircularTextWriter from 'react-circular-text-writer';

<CircularTextWriter
  text="This text is too long to test that it is possible to display it in a circular way as well. "
  radius={150}
  id="react-circular-text-writer"
  options={{
    color: "#ff0000", // red
    fontFamily: "Menlo",
    fontWeight: 700, // bold
  }}
/>
```

## Result

<img width="397" alt="react-circular-text-writer-long-text" src="https://github.com/user-attachments/assets/65434dcd-fa53-46db-8b98-2be06f15e861" />


### Small radius example

```
import CircularTextWriter from 'react-circular-text-writer';

<CircularTextWriter
  text="Small radius circle text "
  radius={150}
  id="react-circular-text-writer"
  options={{
    color: "#ff0000", // red
    fontFamily: "Menlo",
    fontWeight: 700, // bold
  }}
/>
```

## Result

<img width="157" alt="react-circle-text-writer-small-radius" src="https://github.com/user-attachments/assets/0b838f17-593c-4c4d-9f63-1f490d9960ad" />

### Small font-size example

```
import CircularTextWriter from 'react-circular-text-writer';

<CircularTextWriter
  text="Circle text with 8px of font size "
  radius={150}
  id="react-circular-text-writer"
  options={{
    color: "#ff0000", // red
    fontFamily: "Menlo",
    fontWeight: 700, // bold
    fontSize: 8,
  }}
/>
```

## Result

<img width="157" alt="react-circle-text-writer-small-font-size" src="https://github.com/user-attachments/assets/c3bcb0d9-182d-4bdb-9b82-d61d19adf3d5" />


---

## 🛠️ Development

If you want to contribute or run the project locally, follow these steps:

### Clone the repository

```
git clone https://github.com/angelabenavente/react-circular-text-writer.git
cd react-circular-text-writer
```

### Install dependencies

```
npm install
```

### Run tests

```
npm run test
```

### Lint the code

```
npm run eslint
```

---

## 🔄 Changelog

See [CHANGELOG.md](https://github.com/angelabenavente/react-circular-text-writer/blob/main/CHANGELOG.md) for a detailed history of changes.

---

## 💡 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Submit a pull request with a clear description of the changes.

See [CONTRIBUTING.md](https://github.com/angelabenavente/react-circular-text-writer/blob/main/CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/angelabenavente/react-circular-text-writer/blob/main/LICENSE). Created with ❤️ by [Ángela Benavente](https://github.com/angelabenavente).

---

## 🌍 Links

- **GitHub Repository:** [https://github.com/angelabenavente/react-circular-text-writer](https://github.com/angelabenavente/react-circular-text-writer)

- **NPM Package:** [https://www.npmjs.com/package/react-circular-text-writer](https://www.npmjs.com/package/react-circular-text-writer)
