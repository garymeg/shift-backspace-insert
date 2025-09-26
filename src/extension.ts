import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.shiftBackspaceInsert', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const pos = editor.selection.active;

        // Always insert a space at the cursor
        editor.edit(editBuilder => {
            editBuilder.insert(pos, " ");
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
