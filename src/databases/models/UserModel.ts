import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field } from "@nozbe/watermelondb/decorators";

export default class User extends Model {
    static table = 'user';

    @field('nome') nome!: string;
    @field('funcao') funcao!: string;
    @field('sexo') sexo!: string;
    @field('is_ativo') is_ativo!: boolean;
}