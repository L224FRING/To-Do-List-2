'use server'



import { createClient } from '@/app/supabase/server';
import { revalidatePath } from 'next/cache';

export const insert = async (formData:FormData): Promise<void> => {
  try {
    const supabase = createClient();
    
    const {data: {user}}=await supabase.auth.getUser();

    const tas = formData.get('task')

    if (!user){
        throw new Error('No user found');
    }

    const { data: tasks, error } = await supabase
      .from("tasks")
      .insert([{ Task: tas, user_id: user.id }]);

    if (error) {
      throw error; // Throw error if there's an issue with insertion
    }

    console.log('Inserted task:', tasks);
  } catch (error) {
    console.error('Error inserting task:', error);
  }
  revalidatePath('/watch-list')
};

export const update = async (formData: FormData): Promise<void> => {
  try {
    const supabase = createClient();
    
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError) {
      throw new Error('Error fetching user: ' + authError.message);
    }

    if (!user) {
      throw new Error('No user found');
    }

    const id = formData.get('id') as string | null;
    const task = formData.get('task') as string | null;

    if (!id || !task) {
      throw new Error('Task ID and Task are required');
    }

    const { data: updatedTasks, error } = await supabase
      .from("tasks")
      .update({ Task: task })
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      throw error; // Throw error if there's an issue with updating
    }

    console.log('Updated task:', updatedTasks);
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
  revalidatePath('/watch-list')
};



export const remove = async (formData: FormData): Promise<void> => {
  try {
    const supabase = createClient();
    
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError) {
      throw new Error('Error fetching user: ' + authError.message);
    }

    if (!user) {
      throw new Error('No user found');
    }

    const id = formData.get('id') as string | null;

    if (!id) {
      throw new Error('Task ID is required');
    }

    const { data: deletedTasks, error } = await supabase
      .from("tasks")
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      throw error; // Throw error if there's an issue with deletion
    }

    console.log('Deleted task:', deletedTasks);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
  revalidatePath('/watch-list')
};


