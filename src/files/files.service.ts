import { existsSync } from 'fs';
import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    console.log(__dirname);
    const path = join(__dirname, '../../static/products', imageName);
    console.log(path);

    if (!existsSync(path))
      throw new BadRequestException(
        `No product found with image name: ${imageName}`,
      );

    return path;
  }
}
