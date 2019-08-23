/**
 * Parses a JSON string in any notation and returns a JSON string in proper fornat with indentation.
 * Parse method taken from this polyfill:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill
 * @param {string} json unformatted json string
 * @param {number} [spaces=4] spaces to use for each level of indentation
 */
export function jsonPrettify( json: string, spaces: number = 4 ): string {

    return JSON.stringify( eval(`(${json})` ), null, spaces );

}