import { tableSchema } from '@nozbe/watermelondb';

export const userSchema =  tableSchema({
    name: 'user',
    columns: [
        { name: 'nome', type: 'string' },
        { name: 'funcao', type: 'string' },
        { name: 'is_ativo', type: 'boolean', }, //Boolean columns should be have names starting with 'is_'
    ]
})