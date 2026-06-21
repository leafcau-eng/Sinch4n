import { createClient } from "@supabase/supabase-js";

export function getProspectingClient() {
  return createClient(
    process.env.PROSPECTING_SUPABASE_URL!,
    process.env.PROSPECTING_SUPABASE_ANON_KEY!
  );
}
