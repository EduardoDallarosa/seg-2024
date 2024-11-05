import { supabase } from "../@libs/supabase";
import { ICreadential } from "../@libs/supabase/types";

const signIn = async (credential: ICreadential) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: credential.username,
        password: credential.password
    });

    if (error) throw error;

    return data;
}

export const AuthService = {
    signIn
}