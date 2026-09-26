// ตั้งค่า URL และ Anon Key ของโปรเจกต์ Supabase
const SUPABASE_URL = 'https://nfvxeylenkdaewzynubu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ENDvtMzPMGJbWD_CXgKJ_Q_j1_FhWDr';

// สร้าง Supabase Client สำหรับใช้งานผ่าน HTML / Vanilla JS
const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ฟังก์ชันเสริมสำหรับตรวจสอบผู้ใช้ที่ล็อกอินอยู่ (ใช้ได้ทุกหน้า)
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('snd48_user'));
}

// ฟังก์ชันเสริมสำหรับบังคับเช็คหน้า Login (ถ้ายังไม่ล็อกอินให้ดีดกลับหน้า index.html)
function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'index.html';
    }
    return user;
}
