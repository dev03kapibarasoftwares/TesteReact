import Model from '@nozbe/watermelondb/Model';

export interface IUser extends Model {
    id: string, 
    nome?: string;
    funcao?: string;
    ativo?: boolean;
}

export interface IUsers{
    users: IUser[];
}