import * as bcrypt from 'bcrypt';

export class SecurityService {
  encrypt(word: string): string {
    return bcrypt.hashSync(word, 10);
  }

  compareCrypt(word: string, hashedWord: string): boolean {
    return bcrypt.compareSync(word, hashedWord);
  }
}
