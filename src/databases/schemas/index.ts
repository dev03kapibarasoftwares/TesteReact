import { appSchema } from '@nozbe/watermelondb';
import { userSchema } from './userSchema';
import { pontoSchema } from './pontoSchema';

export const schemas = appSchema({
    version: 2,
    tables: [ userSchema, pontoSchema ]
})


