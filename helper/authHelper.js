import bcrypt from 'bcrypt'

export const hashPassword = async(password)=>{
    try{
        const salRounds = 10 ;
        const hashedPassword = await bcrypt.hash(password,salRounds)
        return hashedPassword
    }catch(error){
        console.log(error)
    }
};


export const comparePassword = async(password,hashedPasword)=>{
    return bcrypt.compare(password,hashedPasword)
}