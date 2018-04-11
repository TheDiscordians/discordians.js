const { get } = require('snekfetch');

/**
 * The client to make interaction with discordians-api super easy.
 */
class DiscordianClient {

	/**
	 * Constructs the discordian-client
	 * @since 1.0.0
	 */
	constructor() {
		/**
		 * Base URL of the API
		 * @since 1.0.0
		 * @private
		 */
		this._baseURL = 'https://discordians-api.herokuapp.com/';
	}

	/**
	 * Request a custom endpoint from the API.
	 * @param {string} endpoint The endpoint of the API to call.
	 * @param {object} options The request options for the endpoint call.
	 * @since 1.0.0
	 * @private
	 */
	_get(endpoint, options = {}) {
		return get(`${this._baseURL}${endpoint}`)
			.query(options)
			.then(res => res.body);
	}

	/**
	 * Convert any string to look alike cursive text.
	 * @param {string} inputString The string to be converted.
	 * @since 1.0.0
	 * @returns {Promise<string>} The cursive looking text of what you provided.
	 */
	async cursiveText(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/cursive', { text: inputString });
		return result.message;
	}

	/**
	 * Convert any string to look alike fancy text (style 1).
	 * @param {string} inputString The string to be converted.
	 * @since 1.0.0
	 * @returns {Promise<string>} The fancy looking text (style 1) of what you provided.
	 */
	async fancyText(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/fancy', { text: inputString });
		return result.message;
	}

	/**
	 * Convert any string to look alike fancy text (style 2).
	 * @param {string} inputString The string to be converted.
	 * @since 1.0.0
	 * @returns {Promise<string>} The fancy looking text (style 2) of what you provided.
	 */
	async fancy2Text(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/fancy2', { text: inputString });
		return result.message;
	}

	/**
	 * Leetify any string.
	 * @param {string} inputString The string to be converted.
	 * @since 1.0.0
	 * @returns {Promise<string>} The leetified text of what you provided.
	 */
	async leetify(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/leet', { text: inputString });
		return result.message;
	}
	
	/**
	 * Zalgolize any string.
	 * @param {string} inputString The string to be zalgolized.
	 * @since 1.0.0
	 * @returns {Promise<string>} The zalgolized text of what you provided.
	 */
	async zalgolize(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/zalgolize', { text: inputString });
		return result.message;
	}

	/**
	 * See how pirate would say it.
	 * @param {string} inputString The string to be converted. 
	 * @since 1.0.0
	 * @returns {Promise<string>} This is how pirate said for what you provided.
	 */
	async pirateSpeak(inputString) {
		if (!inputString) throw new Error('You must provide some text to convert it to look like cursive text.');
		if (typeof inputString !== 'string') throw new TypeError('Input text must be string.');
		const result = await this._get('translate/pirate', { text: inputString });
		return result.message;
	}

	/**
	 * Get a random pickup line.
	 * @since 1.0.0
	 * @returns {Promise<string>} A random pickup line.
	 */
	async pickupLine() {
		const result = await this._get('fun/pickup-line');
		return result.pickupLine;
	}

	/**
	 * Get the garfield comic.
	 * @param {boolean} getToday Whether to get today's comic or not.
	 * @since 1.0.0
	 * @returns {Promise<URL>} The URL for the comic image.
	 */
	async garfieldComic(getToday = true) {
		if (getToday && typeof getToday !== 'boolean') throw new TypeError('You must provide true or false depending upon you want today\'s comic or not!');
		const result = await this._get('comic/garfield', { today: getToday });
		return result.image;
	}

	/**
	 * @typedef {object} DilbertComic
	 * @property {URL} URL Link for the comic strip.
	 * @property {URL} image Image URL for the comic.
	 * @memberOf DiscordianClient
	 */

	/**
	 * Get the dilbert comic.
	 * @param {boolean} getToday Whether to get today's comic or not.
	 * @since 1.0.0
	 * @returns {Promise<DilbertComic>} The dilbert comic strip with image URL.
	 */
	async dilbertComic(getToday = true) {
		if (getToday && typeof getToday !== 'boolean') throw new TypeError('You must provide true or false depending upon you want today\'s comic or not!');
		const result = await this._get('comic/dilbert', { today: getToday });
		return result;
	}
}

module.exports = DiscordianClient;
