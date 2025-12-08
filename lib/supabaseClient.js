// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qxnkrmhaiyopvkageizs.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bmtybWhhaXlvcHZrYWdlaXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwOTYwOTcsImV4cCI6MjA4MDY3MjA5N30.UaLIo7jDkdcmETGT6E_Q2zTMDW7PxsHSFeZwxH2eql4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
