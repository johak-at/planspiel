// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iokcanuplcasnxjfqmbj.supabase.co"; // Replace with your Supabase project URL
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlva2NhbnVwbGNhc254amZxbWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MzM0ODYsImV4cCI6MjAwNDIwOTQ4Nn0.olguMW34EO9BFr-1-mbnaIpC86sbINYIAgJ9GRBLW-4"; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
