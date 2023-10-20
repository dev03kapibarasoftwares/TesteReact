import { tableSchema } from '@nozbe/watermelondb';

export const pontoSchema = tableSchema({
    name: 'ponto',
    columns: [
        { name: 'feito_at', type: 'number' }, //Date fields should be umber (dates are stored as Uniz timestamps) and have names ending with '_at'
        { name: 'local', type: 'string' },
        { name: 'is_entrada', type: 'boolean' },
        { name: 'user_id', type: 'string' }, // To add a realtion to a table, add a string column ending with '_id'
        { name: 'is_aprovado', type: 'boolean' }, // To add a realtion to a table, add a string column ending with '_id'
    ]
})
