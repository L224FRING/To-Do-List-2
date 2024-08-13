'use server'
import { createClient } from "@/app/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function logOut() {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }