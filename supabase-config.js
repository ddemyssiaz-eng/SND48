// ตั้งค่า URL และ Anon Key ของโปรเจกต์ Supabase
const SUPABASE_URL = 'https://nfvxeylenkdaewzynubu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ENDvtMzPMGJbWD_CXgKJ_Q_j1_FhWDr';

// ตรวจสอบว่าโหลดไลบรารี Supabase สำเร็จหรือไม่
let supabase = null;
if (window.supabase) {
    const { createClient } = window.supabase;
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error('Supabase SDK ยังไม่ได้ถูกโหลด กรุณาตรวจสอบการแทรก Script ใน HTML');
}

// ฟังก์ชันเสริมสำหรับตรวจสอบผู้ใช้ที่ล็อกอินอยู่ (ป้องกัน Error หากข้อมูลพัง)
function getCurrentUser() {
    try {
        const userStr = localStorage.getItem('snd48_user');
        return userStr ? JSON.parse(userStr) : null;
    } catch (e) {
        console.error('Error parsing user from localStorage:', e);
        localStorage.removeItem('snd48_user');
        return null;
    }
}

// ฟังก์ชันเสริมสำหรับบังคับเช็คหน้า Login (ถ้ายังไม่ล็อกอินให้ดีดกลับหน้า index.html)
function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}
