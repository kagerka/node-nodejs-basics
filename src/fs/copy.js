import { access, constants, cp } from 'fs';

const copy = async () => {
    access('./src/fs/files_copy', constants.F_OK, (notExist) => {
        if (notExist) {
            cp('./src/fs/files', './src/fs/files_copy', { recursive: true }, (err) => {
                if (err) throw new Error('FS operation failed');
            });
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await copy();
