# gptfilescopy

A Node.js command-line tool that collects all files from a specified folder (default: "src") and copies their content into the clipboard. This format is optimized for pasting into OpenAI's ChatGPT.

## Installation

```bash
npm install -g gptfilescopy
```

This command installs the `gptfilescopy` package globally on your system.

## Usage

To run the script with the default source folder ("src"):

```bash
gptfilescopy
```

To specify a custom source folder, provide the folder name as an argument:

```bash
gptfilescopy custom-src-folder
```

The script will scan the specified folder (or "src" by default) and its subfolders, collecting file contents and formatting them for easy pasting into ChatGPT. The formatted content will be copied to your clipboard.

## Contributing

Contributions to `gptfilescopy` are welcome! Please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/kaiwerther/gptfilescopy).

## License

This project is licensed under the MIT License.

