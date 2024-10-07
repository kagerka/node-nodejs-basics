import { access, constants, writeFile } from 'fs';

const create = async () => {
    access('./src/fs/files/fresh.txt', constants.F_OK, (notExist) => {
        if (notExist) {
            writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', () => {})
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();