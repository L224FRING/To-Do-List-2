"use client";
import { createClient } from "@/app/supabase/server";

const FetchNotes = () => {};

export default async function notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
