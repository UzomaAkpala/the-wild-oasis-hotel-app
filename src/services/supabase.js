import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rpdktryhtosxyajndsoh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZGt0cnlodG9zeHlham5kc29oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NTIzMTUsImV4cCI6MjAxMjUyODMxNX0.z38nEBjerP5PksaI-eWZM9f3c-kJJK1FW89fIU0SKpY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
