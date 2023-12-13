import { ChatEngine } from './index.js';

/**
 * This works for the following models (but is not limited to):
 * WizardLM
 */
export class Openchat extends ChatEngine {
	constructor() {
		super({
			instructions: ' ',
			// roleMap: { assistant: 'ASSISTANT', user: 'USER', system: 'SYSTEM' },
			//roleMap: { user: 'GPT4 User: ', assistant: '<|end_of_turn|>GPT4 Assistant:',},
			roleMap: { assistant: '<|end_of_turn|>GPT4 Assistant:', user: 'USER', system: 'GPT4 User: ' },
			//stopPrompts: ['[end of text]'],
			// Need few-shot prompting or else it goes off the rails and generates chinese in 3B
			defaultMsgs:[],
		});
		this.stopPrompts = [
			...this.stopPrompts,
			'</s>',
			'\n</s>',
			'\n</s',
			'[end of text]',
		];		
	}
}
