import { ChatEngine } from './index.js';

/**
 * This works for the following models (but is not limited to):
 * WizardLM
 */
export class Openchat extends ChatEngine {
	constructor() {
		super({
			roleMap: { assistant: 'ASSISTANT', user: 'USER', system: 'SYSTEM' },
			instructions:
				"GPT4 User: ",
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
