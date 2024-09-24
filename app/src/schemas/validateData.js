export const validateData = ({Schema, input})=>{
    return Schema.safeParse(input)
}