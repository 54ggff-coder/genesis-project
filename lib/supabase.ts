import { createClient } from "@supabase/supabase-js";

const supabaseUrl =https://wshbywurteipkpsdrvlm.supabase.co
process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseAnonKey =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzaGJ5d3VydGVpcGtwc2RydmxtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDEzMTA3NSwiZXhwIjoyMDk5NzA3MDc1fQ.Js8xXxCDGeUgLlC1iEJA76xUetWGi1PSh9euN8YH0rc
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase =wshbywurteipkpsdrvlm.supabase.co
createClient(
supabaseUrl,
supabaseAnonKey
);