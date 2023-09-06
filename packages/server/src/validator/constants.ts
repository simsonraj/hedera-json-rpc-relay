export const BASE_HEX_REGEX = '^0[xX][a-fA-F0-9]';
export const ERROR_CODE = -32602;
export const DEFAULT_HEX_ERROR = 'Expected 0x prefixed hexadecimal value';
export const HASH_ERROR = '0x prefixed string representing the hash (32 bytes)';
export const ADDRESS_ERROR = 'Expected 0x prefixed string representing the address (20 bytes)';
export const BLOCK_NUMBER_ERROR =
  'Expected 0x prefixed hexadecimal block number, or the string "latest", "earliest" or "pending"';
export const BLOCK_PARAMS_ERROR = `Expected ${HASH_ERROR} in object, 0x prefixed hexadecimal block number, or the string "latest", "earliest" or "pending"`;
export const BLOCK_HASH_ERROR = `Expected ${HASH_ERROR} of a block`;
export const TRANSACTION_HASH_ERROR = `Expected ${HASH_ERROR} of a transaction`;
export const TOPIC_HASH_ERROR = `Expected ${HASH_ERROR} of a topic`;
