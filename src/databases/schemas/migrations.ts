import { tableSchema } from "@nozbe/watermelondb";
import { addColumns, createTable, schemaMigrations } from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
    migrations: [{
        toVersion: 2,
        steps: [
            createTable({
                name: 'pontos',
                columns: [
                    { name: 'feito_at', type: 'number' },
                    { name: 'local', type: 'string' },
                    { name: 'is_entrada', type: 'boolean', isOptional: true },
                    { name: 'is_aprovado', type: 'string' },
                    { name: 'user_id', type: 'string', isIndexed: true }
                ]
            })
        ]
    }]
})