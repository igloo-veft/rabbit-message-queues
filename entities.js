/**
 * Creates and handles entities for the database
 */

export const userSchema = Schema({
    _id: String,
    name: String,
    token: String,
    gender: String
})

export const companySchema = Schema({
    _id: String,
    name: String,
    punchCount: Number = 10
})

export const punchSchema = Schema({
    _id: String,
    company_id: String,
    user_id: String,
    created: Date,
    used: Boolean
})