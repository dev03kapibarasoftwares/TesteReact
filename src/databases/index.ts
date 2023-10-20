import { Database, Model } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schemas } from './schemas';
import UserModel from './models/UserModel'
import PontoModel from './models/PontoModel';
import migrations from './schemas/migrations';

const adapter = new SQLiteAdapter({
    schema: schemas,
    migrations: migrations
});

export const database = new Database({
    adapter, 
    modelClasses: [UserModel, PontoModel]
})