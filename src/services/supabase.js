import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kxdnaoofwzidrdodgfiw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZG5hb29md3ppZHJkb2RnZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1NDA1OTIsImV4cCI6MjAzNjExNjU5Mn0.F00Y9zy8dHsNG_-xalhieTRRJqtlz6AAkkpqa6oWOLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
