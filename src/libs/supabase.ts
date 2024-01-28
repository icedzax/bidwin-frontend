import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// VITE_SUPABASE_URL=https://rqehleupxdpxndjnggnz.supabase.co
// VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWhsZXVweGRweG5kam5nZ256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2MjUwOTcsImV4cCI6MjAxNjIwMTA5N30.eJwDfIfDJKP_TX_opfG_1xEaGo_-XTu4a_zfx4zun0E
