# clui README

CLUI adds UI to your CLI.

## Features

Your commands can have variables prepended with '$'. These variables will be rendered as input boxes and can be run as a CLI command.

## Steps to install CLUI

- Open VSCode
- Install CLUI extension.
- Click Cmd+Shift+P and type "Run CLUI".
- Select "Run CLUI" and click enter.

## Steps to run CLUI

1. Enter CLI command with variables prepended with '$'.
```
maestro test -e USERNAME=$username -e PASSWORD=$password feature.yaml
```
Click "Generate CLUI" button.

2. Enter variables for CLI command.
```
$username featureUsername
$password featurePassword
```
Click "Generate CLI command"

3. Run generated CLI command button.
```
maestro test -e USERNAME=featureUsername -e PASSWORD=featurePassword feature.yaml`
```
Click "Run CLI command" button.

## Requirements

Visual Studio Code 1.85.0 or higher.

## Release Notes

### 0.0.1

Beta release

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)