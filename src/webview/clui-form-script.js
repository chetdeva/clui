let commands = []; // Store commands globally

function init() {
  document.getElementById('cli-output-command').style.display = 'none';
  document.getElementById('run-cli-command-button').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);

function generateClui() {
  const textarea = document.getElementById('cli-input');
  commands = textarea.value.split('\n');
  const container = document.getElementById('cli-variables-form-container');
  container.innerHTML = '';

  const form = document.createElement('form');
  form.reset();

  const table = document.createElement('table');
  form.appendChild(table);

  commands.forEach((command, index) => {
    const trCommand = document.createElement('tr');
    const tdCommand = document.createElement('td');
    tdCommand.colSpan = 2;
    const commandLabel = document.createElement('label');
    commandLabel.htmlFor = 'labelCommand';
    commandLabel.textContent = command;
    tdCommand.appendChild(commandLabel);
    trCommand.appendChild(tdCommand);
    table.appendChild(trCommand);

    const parts = command.split(' ');
    parts.forEach(part => {
      if (part.includes('$')) {
        const variables = extractVariables(part)
        extractVariables(part).forEach( variable => {
          const tr = document.createElement('tr');
          const tdLabel = document.createElement('td');
          const label = document.createElement('label');
          label.htmlFor = variable + '-' + index;
          label.textContent = variable;
          tdLabel.appendChild(label);
          tr.appendChild(tdLabel);

          const tdInput = document.createElement('td');
          const input = document.createElement('input');
          input.type = 'text';
          input.id = variable + '-' + index;
          input.name = variable + '-' + index;
          tdInput.appendChild(input);
          tr.appendChild(tdInput);

          table.appendChild(tr);
        });
      }
    });
  });

  form.onsubmit = function(event) {
    event.preventDefault();
    handleCluiSubmit();
  };
  const submitButton = document.createElement('button');
  submitButton.id = 'genereate-cli-command-button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Generate CLI command';
  form.appendChild(submitButton);

  container.appendChild(form);
}

function extractVariables(command) {
    var regex = /\$(\w+)/g;
    var match;
    var variables = [];

    while ((match = regex.exec(command)) !== null) {
        variables.push(match[1]);
    }

    return variables;
}

function handleCluiSubmit() {
  document.getElementById('cli-output-command').style.display = 'block';
  document.getElementById('run-cli-command-button').style.display = 'block';

  let substitutedCommands = commands.slice(); // Clone the commands array

  commands.forEach((command, index) => {
    const parts = command.split(' ');
    parts.forEach(part => {
      if (part.includes('$')) {
        const variables = extractVariables(part)
        variables.forEach( variable => {
          const input = document.getElementById(variable + '-' + index);
          const value = input.value;
          substitutedCommands[index] = substitutedCommands[index].replace('$' + variable, value);
        });
      }
    });
  });

  const cliCommands = substitutedCommands.join('\n')
  document.getElementById('cli-output-command').textContent = cliCommands;
  const outputContainer = document.getElementById('cli-output-container');

  const runCliButton = document.getElementById('run-cli-command-button');
  runCliButton.onclick = function() {
    runCliCommands(cliCommands);
  };
}

function runCliCommands(commands) {
    const vscode = acquireVsCodeApi();
    vscode.postMessage({
        command: 'runCliCommands',
        commands: commands
    });
}
