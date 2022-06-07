<p align="center">
  <img 
    width="200"
    src="https://reactfakecode.devluiz.com/assets/logo.8fc3a994.png"
  >
</p>

#

# React Fake Code ![language](https://img.shields.io/badge/language-typescript-blue.svg)

A React component that generates random (or predefined), customizable, colorful skeleton code purposed for beautiful tech landing pages.

## Table of Contents

- <a href="https://reactfakecode.devluiz.com" target="_blank">Demo</a>
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

```sh
npm i react-fake-code
```

## Usage

You can use the component prop-emptied. This will generate random fake code based on the default props.

```js
import { FakeCode } from "react-fake-code";

function MyComponent() {
  return <FakeCode />;
}
```

### Options

| Prop name       | Prop type                                        | Description                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animationTime   | `number`                                         | Total duration in seconds of the fake typing animation.<br />Default value: `2`                                                                                                                                                                      |
| colors          | `string[]`                                       | Colors of the fake words.<br />Default value: `["#ffb86c", "#ff79c6", "#50fa7b", "#bd93f9", "#ff5555"]` (<a href="https://draculatheme.com/contribute" target="_blank">Dracula theme</a> colors)                                                     |
| minLines        | `number`                                         | Minimum number of lines of code.<br />Default value: `5`                                                                                                                                                                                             |
| maxLines        | `number`                                         | Maximum number of lines of code.<br />Default value: `8`                                                                                                                                                                                             |
| minWordsPerLine | `number`                                         | Minimum number of fake words per line.<br />Default value: `2`                                                                                                                                                                                       |
| maxWordsPerLine | `number`                                         | Maximum number of fake words per line.<br />Default value: `5`                                                                                                                                                                                       |
| minWordWidth    | `number`                                         | Minimum width of words.<br />Default value: `15`                                                                                                                                                                                                     |
| maxWordsPerLine | `number`                                         | Maximum width of words.<br />Default value: `45`                                                                                                                                                                                                     |
| maxIndent       | `number`                                         | Maximum indentation of lines.<br />Default value: `45`                                                                                                                                                                                               |
| predefinedLines | [`LineType`](src/FakeCode/types/LineType.ts)`[]` | You can ignore the random fake code generator and use your own fake code object.<br />Example: `[{ indent: 0, words: [{ width: 45, color: "#ffb86c" }] }, { indent: 1, words: [{ width: 34, color: "#ff79c6" }, { width: 40, color: "#50fa7b" }] }]` |
| tabWidth        | `number`                                         | Width of fake indentation tab.<br />Default value: `20`                                                                                                                                                                                              |
| wordStyle       | `React.CSSProperties`                            | Increment or override the fake word style.<br />Example: `{ height: 20, borderRadius: 14 }`                                                                                                                                                          |

## License

[MIT](LICENSE) © [Luiz Fernando Schiestl Alexandre](https://github.com/luizschiestl/)
