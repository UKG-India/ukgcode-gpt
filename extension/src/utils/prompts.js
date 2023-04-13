// const { ACTION_TYPES } = require('../enums.js')

let oneShotPrompt = ''

const getCommandPrompt = (cleanPromptText, promptType, language) => {
  if (language === 'English') {
    switch (promptType) {
      case 'chatCodeGPT':
        oneShotPrompt = `I am a helpful programming expert assistant. If you ask me a question that is rooted in truth, I will give you the answer.
        USER: What is an API?
        BOT: An API is a set of rules for interacting with software or a service.
        USER: `
        break
      case 'askCodeGPT':
        oneShotPrompt = ''
        break
      case 'explainCodeGPT':
        oneShotPrompt = 'Explain what this code does: '
        break
      case 'refactorCodeGPT':
        oneShotPrompt = 'Refactor this code and explain what\'s changed: '
        break
      case 'documentCodeGPT':
        oneShotPrompt = 'Document the following code: '
        break
      case 'findProblemsCodeGPT':
        oneShotPrompt = 'Find problems with the following code, fix them and explain what was wrong: '
        break
      case 'getCodeGPT':
        oneShotPrompt = 'Write a code in '
        break
      case 'unitTestCodeGPT':
        oneShotPrompt = 'Write the unit test code for the following code: '
        break
      default:
      // código para ejecutar si expression no coincide con n ni con m
    }
  }
  if (promptType === 'compileAndRunCodeGPT') {
    oneShotPrompt = `Act as if you were a console, if there is any error it shows the error message if there is not error then Compile and Execute the following code,  Then he explains in ${language} what happened in the execution:
    '''
    ${cleanPromptText}
    '''
    Result:`
  } else {
    oneShotPrompt = oneShotPrompt + cleanPromptText
  }

  return oneShotPrompt
}

module.exports = { getCommandPrompt }
