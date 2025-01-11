import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import crypto, {Cipher} from 'crypto'

const algorithm = 'aes-256-cbc'
const charset = 'utf8'
const cipherEncoding = 'base64'

const KEY_PUBLIC = process.env.NEXT_PUBLIC_KEY_PUBLIC ?? ''
const IV_PUBLIC = process.env.NEXT_PUBLIC_IV_PUBLIC ?? ''

export const encrypt = function (plaintext: string) {
  const key = Buffer.from(KEY_PUBLIC, 'hex'); // Chuyển key từ hex sang Buffer
  const iv = Buffer.from(IV_PUBLIC, 'hex');  // Chuyển iv từ hex sang Buffer
  const cipher: Cipher = crypto.createCipheriv(algorithm, key, iv)
  const cipherChunks: string[] = []
  cipherChunks.push(cipher.update(plaintext, charset, cipherEncoding))
  cipherChunks.push(cipher.final(cipherEncoding))
  let encrypt = cipherChunks.join('')
  encrypt = encrypt.replace(/\+/g, '%2b')
  return encrypt
}

export const decrypt = function (plaintext: string) {
  // eslint-disable-next-line no-param-reassign
  plaintext = plaintext.replace(/(%2b)/g, '+')
  const decipher = crypto.createDecipheriv(algorithm, KEY_PUBLIC, IV_PUBLIC)
  const plainChunks = []
  plainChunks.push(decipher.update(plaintext, cipherEncoding, charset))
  plainChunks.push(decipher.final(charset))
  return plainChunks.join('')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(value: string) {
  if (!value) return ''; // Xử lý trường hợp chuỗi rỗng
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}