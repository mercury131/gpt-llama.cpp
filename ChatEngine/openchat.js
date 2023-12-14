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
				"A chat between a curious user and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the user's questions.",
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
