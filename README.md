# CLUI 💟

CLUI adds UI to your CLI.

![Screenshot](./README_resources/clui-screenshot.png)

## Features

Your commands can have variables prepended with '$'. These variables will be rendered as input boxes and can be run as a CLI command.

## Steps to install CLUI

- Open VSCode
- Install CLUI extension.
- Click Cmd+Shift+P and type "Run CLUI".
- Select "Run CLUI" and click enter.

## Steps to run CLUI

### 1. Enter CLI commands with variables prepended with '$'.
```
maestro test -e USERNAME=$username -e PASSWORD=$password feature.yaml
```
Click "Generate CLUI" button.

### 2. Enter variables for CLI commands.
```
$username featureUsername
$password featurePassword
```
Click "Generate CLI commands"

### 3. Run generated CLI commands button.
```
maestro test -e USERNAME=featureUsername -e PASSWORD=featurePassword feature.yaml`
```
Click "Run CLI commands" button.

## Requirements

Visual Studio Code 1.85.0 or higher.

## Release Notes

### 0.0.1

Beta release

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Contributing

Pull requests are welcome. For contributing, create a fork and a pull request.

[How to contribute](https://github.com/MarcDiethelm/contributing/blob/master/README.md)

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
