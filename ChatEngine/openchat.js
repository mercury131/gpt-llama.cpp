import { ChatEngine } from './index.js';

/**
 * This works for the following models (but is not limited to):
 * WizardLM
 */
export class Openchat extends ChatEngine {
	constructor() {
		super({
			instructions: ' ',
			roleMap: { assistant: 'ASSISTANT', user: 'USER', system: 'SYSTEM' },
			stopPrompts: ['[end of text]'],
			// Need few-shot prompting or else it goes off the rails and generates chinese in 3B
			defaultMsgs:[],
		});
	}
}
