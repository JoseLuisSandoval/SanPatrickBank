import { EntitySchema } from "typeorm";
import { User } from "../domain/User";

export const UserSchema = new EntitySchema<User>({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
        },
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        phone: {
            type: String,
        },
        phoneConfirmed: {
            type: Boolean,
            default: false,
        },
        email: {
            type: String,
        },
        emailConfirmed: {
            type: Boolean,
            default: false,
        },
        passwordHash: {
            type: String,
        },
        securityStamp: {
            type: String,
            nullable:true
        },
        concurrencyStamp: {
            type: String,
        },
        lockoutEnd: {
            type: String,
            nullable: true,
        },
        lockoutEnabled: {
            type: Boolean,
        },
        accesFailedCount: {
            type: Number,
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
        createdBy: {
            type: String,
        },
        modifiedAt: {
            type: "timestamp",
            createDate: true,
            nullable: true,
        },
        modifiedBy: {
            type: String,
            nullable: true,
        },
    },
});