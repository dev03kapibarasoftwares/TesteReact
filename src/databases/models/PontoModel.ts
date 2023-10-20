import { Model } from '@nozbe/watermelondb';
import { field, date, relation, immutableRelation } from '@nozbe/watermelondb/decorators';

export default class Ponto extends Model {
    static table = 'ponto';

    @date('feito_at') feito_at!: number;
    @field('local') local!: string;
    @field('is_entrada') is_entrada!: boolean;
    @field('is_aprovado') is_aprovado!: boolean;
    @immutableRelation('user', 'user_id') user: any;
}