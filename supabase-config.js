// นำเข้าหรือเรียกใช้ Supabase จาก CDN (ในกรณีใช้ไฟล์ HTML แบบ Vanilla JS)
// ตรวจสอบให้แน่ใจว่าในหน้า HTML มีการโหลดสคริปต์ Supabase SDK แล้ว:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const SUPABASE_URL = 'https://nfvxeylenkdaewzynubu.supabase.co';
const SUPABASE_ANON_KEY = 'Sb_publishable_ENDvtMzPMGJbWD_CXgKJ_Q_j1_FhWDr';

// สร้าง Supabase Client กลางสำหรับใช้งานทั้งโปรเจกต์
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
