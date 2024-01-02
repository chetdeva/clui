import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('clui.showLogin', () => {
        const panel = vscode.window.createWebviewPanel(
            'cluiView',
            'CLUI',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'webview'))]
            }
        );

        const htmlPath = vscode.Uri.file(path.join(context.extensionPath, 'src/webview', 'CLUIForm.html'));
        const htmlContent = fs.readFileSync(htmlPath.fsPath, 'utf8');
        panel.webview.html = htmlContent;

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'runCliCommands':
                        const { commands } = message;
                        runCluiCommands(commands);
                        return;
                }
            },
            undefined,
            context.subscriptions
        );
    });
}

function runCluiCommands(commands: string) {
    const terminal = vscode.window.createTerminal({ name: 'CLUI Terminal' });
    terminal.show();
    terminal.sendText(commands);
}

export function deactivate() {}
