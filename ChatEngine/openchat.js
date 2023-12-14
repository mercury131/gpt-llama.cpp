import { ChatEngine } from './index.js';

/**
 * This works for the following models (but is not limited to):
 * WizardLM
 */
export class Openchat extends ChatEngine {
	constructor() {
		super({
			roleMap: { assistant: '<|end_of_turn|>GPT4 Assistant:', user: 'GPT4 User: ', system: 'SYSTEM' },
			defaultMsgs:[],			
			instructions:
				"GPT4 User: ",
		});
		this.stopPrompts = [
			...this.stopPrompts,
			'[end of text]',
		];
	}
}
