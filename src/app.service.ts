import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async checkInternet(): Promise<string> {
    return new Promise((resolve) => {
      require('dns').resolve('google.com', (err) => {
        if (err) {
          resolve("Not Connected");
        } else {
          resolve("Connected");
        }
      });
    })
  }
}
