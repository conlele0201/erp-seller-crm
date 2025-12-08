// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qxnkrmhaiyopvkageizs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bmtybWhhaXlvcHZrYWdlaXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwOTYwOTcsImV4cCI6MjA4MDY3MjA5N30.UaLIo7jDkdcmETGT6E_Q2zTMDW7PxsHSFeZwxH2eql4";

// Giữ 1 client cho browser, KHÔNG chạy trên server khi build
let browserClient = null;

export function getSupabaseClient() {
  // Khi đang build trên server (Vercel) thì không tạo client
  if (typeof window === "undefined") {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return browserClient;
}
