// lib/supabase-server.ts
//
// Setup Supabase server-side MINIMAL untuk repo Portfolio (sch-website).
//
// Scope sengaja dibatasi (sesuai keputusan Fase 2):
// - HANYA untuk public read (mis. tabel ecosystem_status)
// - TIDAK ada auth/login
// - TIDAK ada realtime subscription
// - TIDAK pakai cookies (beda dari lib/supabase-server.ts di AI Creator Hub,
//   yang memang butuh cookies untuk auth session user). Portfolio tidak
//   butuh session apapun, jadi cukup pakai anon key langsung, lebih ringan.
//
// Dipakai HANYA di Server Component (mis. app/portfolio/page.tsx).

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

